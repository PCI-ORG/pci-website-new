---
title: "PCI-NKO"
---

The PCI-NKO series is a predictor of policy changes in North Korea (NKO). A spike in the indicator signals a policy change, while a vertical bar marks the occurrence of a policy change labeled by the event.

**Figure: PCI-NKO and Major Policy Events in North Korea, Apr 2022 to Feb 2024**

![graph](https://pci-org.github.io/PCI-NKO/plot1/plot1.html?showlink=false)

For technical details about this algorithm, check out the [source code](https://github.com/PCI-ORG/PCI-NKO) and stay tune for our upcoming research paper on the subject.

---

## Introduction

The Democratic People's Republic of Korea (or North Korea), under the Kim family's rule for three generations spanning 76 years, remains one of the most repressive and secretive autocracies on earth. However, as North Korea's nuclear and missile programs continue to advance and threaten other countries, the stake could not be higher for policymakers in the United States and its allies to better understand, or even anticipate, the Hermit Kingdom's moves.

In this project, we introduce a new, open-source method of glimpsing into the North Korean regime—by reading between the lines in its state propaganda. We call it the Policy Change Index project for North Korea (PCI-NKO), which predicts Pyongyang's moves by analyzing the text of _Rodong Sinmun_, the Workers' Party of Korea (WPK)'s most prominent official newspaper covering major issues from domestic economic policy to foreign and defense policy.

The design of the PCI-NKO has two building blocks: (1) it takes as input data the full text of the _Rodong Sinmun_; (2) it employs machine learning and large language models (LLMs) to "read" the articles and detect changes in the way the newspaper prioritizes policy issues.

The source of the PCI-NKO's predictive power can be traced back to Soviet Russia and Communist China, after which Kim Il Sung, Kim Jong Un's grandfather, modeled his WPK. Among other things, the WPK assigns media a foundational role of ideological "education," runs _Rodong Sinmun_ out of its central committee, and appoints a propaganda tsar to fully control the government's messaging at home and abroad. According to this ideology, the masses are backward, so the Communists need to convince the people that the government's policies are sound and that they should follow the party's lead. Therefore, from an observer's perspective, when the indicator detects changes in propaganda, it effectively predicts changes in policy.

---

## Methodology

We adopt the [predictive framework of the PCI-China](overview-PCI-China.html) for the PCI-NKO, and it consists of the following steps:

1. Collect the full text of _Rodong Sinmun_ from January 2018 to February 2024 and label a set of essential metadata for each article, such as publication date, title, content and page number. In particular, we focus on whether an article was published on the front page—a simple but effective proxy for the importance of the content.

2. For every four years of data (such as from January 2018 to December 2021), train a deep learning model tailored to the Korean language to predict whether an article was published on the front page. This step is akin to how a propagandist operates: prioritizing different content based on the party's policy direction.

3. Deploy the model to the three months following the four-year window (such as January to March 2022) and assess whether the algorithm's performance (in telling front-page articles apart) is significantly different from that in training. This step is akin to an avid _Rodong Sinmun_ reader watching out for anomalies relative to what they consider the newspaper's baseline.

4. Define the difference in the algorithm's performance between the training period and the deployment period as the value of the PCI-NKO at the point of analysis. When the index is high, it suggests that the editorial priorities have shifted from the preceding four years to the subsequent three months.

5. Use LLMs to interpret the anomalous articles detected in the three-month window. False positives—articles predicted to be on but actually off the front page—represent policies with declining priorities. Similarly, false negatives—articles predicted to be off but actually on the front page—signal policies that are becoming more prominent.

6. Repeat the analysis every month, resulting in a monthly PCI-NKO from April 2022, the earliest data point given the scope of the raw data, to February 2024.

We have released the source code of the project on GitHub, which can be found [here](https://github.com/PCI-ORG/PCI-NKO).

---

## Main Results

The above figure plots the monthly PCI-NKO from April 2022 to February 2024. When the index hovers near zero, the (new) articles in the current quarter are largely confirming the "paradigm" the algorithm has acquired from the previous five years, suggesting policy stability. But if the index increases drastically, it would mean a big "surprise" to the algorithm's existing understanding, which, in turn, would indicate a major policy change in the near future.

To test the hypothesis that change in PCI-NKO is predictive of change in policies, we curate a list of major policy events in North Korea during the period of the analysis and examine whether their occurrences are preceded by significant movements in the PCI-NKO. As shown in the figure, the indicator does tend to spike before policy events take place. As outlined in step 5 above, we also leverage LLMs to interpret the leading spikes of the PCI-NKO and verify that the changes in _Rodong Sinmun_ were indeed indicative of the regime's nuclear expansion.

On April 1, 2023, for example, the index recorded a value of 0.1, one of the highest in the period of our analysis. The spike indicates a major editorial change in _Rodong Sinmun_ between the four years from January 2019 to December 2022 and the three months from January to March 2023. Using LLMs, we categorize sampled articles from the training and deployment windows into 10 policy areas, and we examine the areas where the algorithm makes more false negative mistakes in deployment than in training, indicating emerging priorities compared to the baseline.

The content analysis suggests that defense and national security has the biggest training-to-deployment contrast in false negatives. The misclassified articles often highlight advancements in intercontinental ballistic missile (ICBM) technology and military readiness, Kim Jong Un's focus on military exercises and counterattack training, suggesting an anticipation of military aggressions.

These anomalies detected by the algorithm are consistent with North Korea's nuclear arsenal expansion in early 2023. On April 13, North Korea conducted the inaugural launch of the Hwasong-18, its first long-range, solid-fueled ICBM, potentially putting the entire continental United States within Pyongyang's reach. That marks yet another progress on its weapons program following the successful November 2022 launch of the liquid-fueled ICBM Hwasong-17, a February 2023 military parade that showcased more North Korean nuclear weapons than ever before, and other military events.

---

## Limitations and Future Developments

One important limitation of the PCI approach is that, while LLMs can assist with interpreting anomalies in propaganda, the policy implications of those anomalies are not always as straightforward as in the April 1, 2023 episode about defense and national security.

We also acknowledge that the algorithm's training performance still has room for improvement. The deep learning model we used—and pre-trained language models more generally—may not have taken into account the difference between North and South Korean languages, which have diverged significantly after decades of separation. Additionally, the uncertain policy directions of the North Korean government may also have contributed to the algorithm's performance issues.

Finally, it's in our roadmap to continue to expand the PCI-NKO time series to cover the time before 2018 and to continue to update as new _Rodong Sinmun_ data become available.
