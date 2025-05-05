---
title: "PCI-Tensions"
---

The PCI-Tensions algorithm uses large language models (LLMs) to create early warning signals for a Taiwan Strait crisis between China and Taiwan. The model is trained on the Chinese Communist Party (CCP) propaganda data for the 1995 Taiwan Strait Crisis, and its performance is tested on more recent cross-Strait political events from 2022 to 2024.

**Figure 1. PCI-Tensions and Major Political Events in the Taiwan Strait**

![](pci-tensions-fig1.png)

For technical details about this algorithm, check out the [source code](https://github.com/PCI-ORG/PCI-Tensions) and our [research paper](https://www.mercatus.org/research/policy-briefs/predicting-taiwan-strait-crises-using-propaganda-new-open-source-method) on the subject.

---

## Introduction

The CCP has long viewed Taiwan as a renegade province that should be returned to China---by force if necessary. For the CCP,
"reunification" with the island is not a matter of if, but when. But when? That's anyone's guess. US military leaders, for example, have differing estimates of when a Chinese invasion of Taiwan might occur.

In this policy brief, we introduce a new open-source method that uses LLMs to analyze CCP propaganda and develop early warning signals for a Taiwan Strait crisis---potentially a prelude to an invasion. Propaganda content is useful for this predictive purpose---not as a reflection of truth, but as a tool for making inferences about a regime's views and intentions. As a highly centralized authoritarian regime, the CCP uses mass media to align public opinion with the policies it intends to implement, so that the people are more likely to be onboard with the policy rollout. We hypothesize that when tensions are elevated in the newspaper, a potential crisis---or even a kinetic conflict---between China and Taiwan becomes more likely.

---

## Methodology

The PCI-Tensions model relies on textual information obtained from *People's Daily* articles. The model development involves two phases:
 
- Training phase: We develop an AI model for the period of the 1995 Taiwan Strait Crisis, which led to military escalations by China, Taiwan, and the US before the crisis subsided. The model learns the tone and tenor of the propaganda language learning up to and during the heightened tensions.

- Test phase: We assess the model's performance on more recent cross-Strait political events from 2022 to 2024, including major visits and meetings between US and Taiwanese leaders, some of which were associated with higher cross-Strait tensions than others. The goal is to test whether the learned patterns from phase 1 are helpful in detecting subsequent tensions covered in this phase.

More specifically, the model training is carried out in the following steps.

We first collect the full text of the *People's Daily* from the 1994–1996 training phase and 2022–2024 test phase. We identify major events that occurred leading up to and during the 1995 Taiwan Strait Crisis and the more recent US-Taiwan diplomatic events from 2022 to 2024.
 
For each newspaper article published in the training phase, we build a set of LLM-based quantitative indices to measure China-Taiwan relations. We use prompts using such questions as how the relationship between China and Taiwan is perceived and how the Chinese government views the Taiwanese government. We then aggregate each article-level index to a weekly index.
 
To optimize the fit of the indices to the timing of the major events during the 1994–1996 period, we improve the indices by revising the LLM prompts to better capture a variety of topics most relevant to China-Taiwan tensions, such as military activities, US engagement, economic relations, culture exchange, and China's emphasis on reunification and the One China principle. The following four topics turned out the most relevant to change in tensions in the training phase:
 
- China's attitude toward Taiwan;

- China's attitude toward the US;

- Prospect of military activities between China and Taiwan;

- Prospect of China's reunification with Taiwan.
 
After training and tuning the model, we assess its performance by deploying the model to *People's Daily* articles in the 2022–2024 period, which covers major political events across the Taiwan Straits, including Taiwan's diplomatic activities and China's military escalations.

We have released the source code of the PCI-Tensions project (including the LLM prompts) on GitHub, which can be found [here](https://github.com/PCI-ORG/PCI-Tensions).

---

## Main Results

We test the algorithm's performance against five sets of recent Taiwan Strait events:

- Then-US House Speaker Nancy Pelosi's August 2022 visit to Taiwan and China's subsequent military escalations;

- Then-Taiwanese President Tsai Ing-wen's April 2023 visit to the US and meeting with then-US House Speaker Kevin McCarthy, as well as China's response;

- Then-Taiwanese Vice President Lai Ching-te's August 2023 visit to the US and China's response;

- Lai's inauguration as the Taiwanese president;

- Lai's visit to the US in November 2024 for the first time as Taiwanese president, while China's response was relatively muted;


The right column of plots in figure 1 validates these impressions but more quantitatively. The events surrounding Pelosi's Taiwan visit exhibited the expected behavior across the four indices, with the most pronounced changes occurring shortly before her arrival in Taiwan. This is followed by Lai's inauguration as the Taiwanese president, which registered a significant dip in China's attitude toward Taiwan and a sizeable increase in the prospect of military activities across the Taiwan Strait. In contrast, other events listed above, the most recent US visit by Lai, received relatively muted movements across the four indices.

---

## Future Developments

The dominoes triggered by a Chinese invasion of Taiwan would have a catastrophic impact on the world. While predicting the likelihood and timing of such an event is inherently difficult, a couple of improvements are in the roadmap of the algorithm's future development:

First, there were other crises before 1995, such as the ones in 1954–1955 and 1958. Including these precedents would allow the algorithm to have more training data, although the potential differences in the text data due to the long time apart would need to be accounted for.

Second, to the extent that a crisis in the Taiwan Strait would likely involve not only China and Taiwan but also the US and its Indo-Pacific allies, media data from these other countries could potentially contain useful information for the model. However, because these other countries are liberal democracies, their media data must be treated differently from that of an authoritarian mouthpiece like *People's Daily*.

---

## Acknowledgement

This project is a collaboration between PCI and Gear Factory, a company specialized in deploying artificial intelligence solutions.