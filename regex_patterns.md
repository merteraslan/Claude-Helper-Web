---
layout: default
title: Regex Pattern Guide
---

<div class="wrapper">
    <div class="container">
        <div class="main-content">
            <h1>Regex Pattern Guide for Claude Helper</h1>

            <h2>Overview</h2>
            <p>This guide explains how to use regex patterns to exclude files and folders from being uploaded to Claude AI. The extension matches these patterns against the full file paths.</p>

            <h2>How to Add Patterns</h2>
            <ol>
                <li>Open the extension settings</li>
                <li>Go to the "Exclude by Regex Pattern" section</li>
                <li>Enter <strong>one pattern per line</strong> in the textarea</li>
                <li>Click "Add Regex Pattern"</li>
            </ol>

            <div class="warning">
                <p>⚠️ <strong>Important</strong>: Add each pattern on a new line. Do not paste multiple patterns in one line.</p>
            </div>

            <h2>Common Use Cases and Patterns</h2>
            node_modules # Excludes node_modules folder and its contents

\.git # Excludes .git folder and its contents
dist # Excludes dist folder and its contents
build # Excludes build folder and its contents
coverage # Excludes coverage folder and its contents

### 2. Exclude Configuration Files

package-lock\.json$ # Excludes package-lock.json
\.env$ # Excludes .env files
\.config\.(js|ts)$ # Excludes .config.js and .config.ts files

### 3. Exclude Build/Compiled Files

\.min\.js$ # Excludes minified JavaScript files
\.(map|bundle)\.js$ # Excludes source maps and bundled files

### 4. Exclude Temporary and System Files

\.DS_Store$ # Excludes macOS system files
desktop\.ini$ # Excludes Windows system files
\.tmp$ # Excludes temporary files
~$ # Excludes backup files (ending with ~)

## Pattern Matching Rules

### Basic Rules

- Patterns are case-sensitive
- Patterns match anywhere in the path unless anchored
- Use `^` to match the start of the path
- Use `$` to match the end of the path

### Special Characters

- `.` matches any character (use `\.` to match a literal dot)
- `*` matches zero or more characters
- `?` matches exactly one character
- `|` means OR (e.g., `(js|ts)` matches "js" or "ts")
- `^` matches the start of the path
- `$` matches the end of the path

### Examples with Explanations

^test/ # Matches paths starting with "test/"
\.test\.js$ # Matches files ending with .test.js
(spec|test)\.js # Matches both spec.js and test.js files
^\.. # Matches any hidden file/folder (starting with .)

            <a href="index.html" class="button">Back to Home</a>
        </div>
    </div>

</div>
