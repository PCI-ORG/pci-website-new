
This document is a suggested set of formatting convention for any future PCI project reports. Following this set of rules should allow new reports to be integrated onto the website much quicker and easier.

# Sample document
```markdown
---
title: PCI-xxx
date: 2023-12-3
---

The PCI-xxx series is a predictor of ...

**Figure: Major events from 19xx to 20xx**

![graph](https://plot.ly/PCI-xxx)

---

# Introduction

... source code of this project can be found [here](https://github.com/PCI-xxx)




```

# Explanation

## Metadata

This is the block surrounded by two separate lines of three dashes (---). Please include the following:

1. Title
2. Date of last update

## Paragraph

- Use Header 1 `#` for the title of each new section.

- Each paragraph should start with an additional empty line above it.

- Hyperlinks should be attached using this format: `[click here](https://link)`. Please do not include other formatting for the anchor text, e.g. italics or bold.

- For both ordered or unordered lists, leave an empty line between each bullet point.

## Graphs & Images

- Every image should be attached using this format: `![](imagename.png)`

- Every interactive graph using externally linked sources (e.g. plotly) should be attached using this format: `![graph](https://link-to-graph.com/graph)`

- To apply title to an image or a graph, use a separate paragraph with double surrounding asterisks `**like this**`
