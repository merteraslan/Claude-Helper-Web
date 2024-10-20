---
layout: default
title: Changelog
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Claude Helper - Changelog</title>
    <link rel="stylesheet" href="custom.css">
</head>
<body>
    <div class="container">
        <h1>Changelog</h1>
        <p>All notable changes to the Claude Helper extension will be documented in this file.</p>
        <p>The format is based on <a href="https://keepachangelog.com/en/1.0.0/">Keep a Changelog</a>, and this project adheres to <a href="https://semver.org/spec/v2.0.0.html">Semantic Versioning</a>.</p>

        <h2>1.3.0 - 2024-08-18</h2>
        <h3>Added</h3>
        <ul>
            <li>Automatic detection and skipping of image files during upload process.</li>
            <li>Comprehensive upload summary message including:
                <ul>
                    <li>Number of successfully uploaded files</li>
                    <li>Number of skipped image files</li>
                    <li>Number of failed uploads (if any)</li>
                </ul>
            </li>
        </ul>

        <h3>Changed</h3>
        <ul>
            <li>Implemented a 5-second delay before page refresh to ensure visibility of the upload summary.</li>
            <li>Page now only refreshes if at least one file was successfully uploaded.</li>
            <li>Consolidated various status messages into a single, comprehensive upload summary.</li>
        </ul>

        <h3>Fixed</h3>
        <ul>
            <li>Resolved an issue where users couldn't see the upload summary due to rapid page refresh.</li>
        </ul>

        <a href="index.html" class="button">Back to Home</a>
    </div>

</body>
</html>
