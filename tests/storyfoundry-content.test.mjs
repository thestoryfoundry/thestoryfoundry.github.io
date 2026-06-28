import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const SOURCE_ROOTS = ["app", "components", "data"];

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return /\.(ts|tsx)$/.test(entry.name) ? [path] : [];
  });
}

const activeSource = SOURCE_ROOTS
  .flatMap(sourceFiles)
  .map((path) => readFileSync(path, "utf8"))
  .join("\n");

test("the active site identifies StoryFoundry and its founder", () => {
  for (const expected of [
    "StoryFoundry",
    "Social Media Company",
    "Founded & led by Anshu Yadav",
    "We turn brand ideas into social stories people remember.",
  ]) {
    assert.match(activeSource, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("the active site contains all nine approved services", () => {
  for (const service of [
    "Social Strategy",
    "Content Creation",
    "Account Management",
    "Campaign Planning",
    "Short-Form Video",
    "Copy & Storytelling",
    "Community Engagement",
    "Performance Insights",
    "Brand Voice Development",
  ]) {
    assert.match(activeSource, new RegExp(service.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("the active site uses the approved email and LinkedIn profile", () => {
  assert.match(activeSource, /anspurple16@gmail\.com/);
  assert.match(activeSource, /linkedin\.com\/in\/anshu-yadav-9b21a3158/);
});

test("the active site no longer exposes the copied engineer portfolio", () => {
  for (const legacyText of [
    "Dixit Kumar",
    "Software Engineer",
    "Kimbal",
    "NSUT",
    "dixitkumar300@gmail.com",
    "Dixit1010",
    "/resume.pdf",
    "Travsy",
    "Chatify",
    "Saarthi",
    "Hirexx",
    "TradeBook",
    "Plant AI",
    "Wordoodle",
    "Sorting Visualizer",
    "Car Price Prediction",
  ]) {
    assert.doesNotMatch(activeSource, new RegExp(legacyText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});
