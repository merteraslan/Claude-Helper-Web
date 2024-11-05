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

            <h3>1. Exclude Common Directories</h3>
            <pre><code>node_modules/     # Excludes node_modules folder and its contents

\.git # Excludes .git folder and its contents
dist # Excludes dist folder and its contents
build # Excludes build folder and its contents
coverage # Excludes coverage folder and its contents</code></pre>

            <h3>2. Exclude Configuration Files</h3>
            <pre><code>package-lock\.json$      # Excludes package-lock.json

\.env$ # Excludes .env files
\.config\.(js|ts)$ # Excludes .config.js and .config.ts files</code></pre>

            <h3>3. Exclude Build/Compiled Files</h3>
            <pre><code>\.min\.js$              # Excludes minified JavaScript files

\.(map|bundle)\.js$ # Excludes source maps and bundled files</code></pre>

            <h3>4. Exclude Temporary and System Files</h3>
            <pre><code>\.DS_Store$     # Excludes macOS system files

desktop\.ini$ # Excludes Windows system files
\.tmp$ # Excludes temporary files
~$ # Excludes backup files (ending with ~)</code></pre>

            <h2>Pattern Matching Rules</h2>

            <h3>Basic Rules</h3>
            <ul>
                <li>Patterns are case-sensitive</li>
                <li>Patterns match anywhere in the path unless anchored</li>
                <li>Use <code>^</code> to match the start of the path</li>
                <li>Use <code>$</code> to match the end of the path</li>
            </ul>

            <h3>Special Characters</h3>
            <ul>
                <li><code>.</code> matches any character (use <code>\.</code> to match a literal dot)</li>
                <li><code>*</code> matches zero or more characters</li>
                <li><code>?</code> matches exactly one character</li>
                <li><code>|</code> means OR (e.g., <code>(js|ts)</code> matches "js" or "ts")</li>
                <li><code>^</code> matches the start of the path</li>
                <li><code>$</code> matches the end of the path</li>
            </ul>

            <h3>Examples with Explanations</h3>
            <pre><code>^test/          # Matches paths starting with "test/"

\.test\.js$ # Matches files ending with .test.js
(spec|test)\.js # Matches both spec.js and test.js files
^\.. # Matches any hidden file/folder (starting with .)</code></pre>

            <a href="index.html" class="button">Back to Home</a>
        </div>
    </div>

</div>
