---
title: "PCI-Personnel"
---

The PCI-Personnel is an algorithm for tracking the prominence of different personnel around a political leader. In a first use case, we develop the PCI-Personnel for Chinese politicians around Chinese President Xi Jinping. Figure 1 below plots the indices for 28 top politicians in China from 2007 to the present. The value of an index measures how positive a politician's public image is as perceived by the *People's Daily*, the most prominent official newspapers of the Chinese Community Party.

<strong>Figure 1. PCI-Personnel for Top Chinese Politicians Around President Xi Jinping</strong>

![graph](https://pci-org.github.io/PCI-Personnel/?showlink=false)

For technical details about this algorithm, check out the [source code](https://github.com/PCI-ORG/PCI-Personnel) and stay tune for our upcoming research paper on the subject.

---

## Introduction

Chinese politics remains one of the world's most important yet least understood. One aspect of that mystery has been the often unexpected and dramatic rise and fall of top officials. When Chinese President Xi Jinping assumed a third five-year term in 2022, he made surprising choices like Li Qiang and Cai Qi for the Politburo Standing Committee. A year later, Xi purged his Foreign Minister Qin Gang, Defense chief Li Shangfu and several top commanders of the People's Liberation Army's Rocket Force—all within a few months. Previous Chinese leaders are known to have done the same rather frequently.

In this project, we develop an automated tracker, the Policy Change Index for Personnel (PCI-Personnel), for the rise of fall of key Chinese politicians. The algorithm uses large language models (LLMs) to quantify each politician's relationship with Xi, as reflected in the Chinese Communist Party's official newspaper, the *People's Daily*. The PCI-Personnel is a daily indicator that covers the period from 2007—approximately five years before Xi took the helm of the CCP—to the present. Initial results suggest that the index's value tracks, and in some cases seems to be a leading indicator of, the prominence of top Chinese officials.

The effectiveness of this prominence tracker rests on the nature of China's propaganda system: The CCP uses mass media to align public opinion with the policies it intends to implement, so that the people are more likely to be onboard with the policy rollout. The same is true for promoting or demoting party officials, who are in turn tasked to carry out policies. Therefore, by measuring those politicians' public image in the party's propaganda, the index tracks and could even predict the officials' political fortune—or the lack thereof.

---

## Methodology

The PCI-Personnel algorithm consists of the following five steps:

1. Data extraction: It takes input data from the full text of the *People's Daily*.

2. Data preparation: We first compile a list of persons of interest (POIs), which in the current version includes 28 top Chinese politicians formerly or currently serving in the CCP's Central Committee. For each POI, the algorithm then selects news articles that involve both the POI and Xi (e.g., when they appear at a same public event).

3. Data analysis: We employ LLMs to assign a score on a scale of -5 to +5 for the relationship between the POI and Xi as perceived by the newspaper. For each POI, the LLM analysis is implemented at the article level; that is, the relationship between any POI and Xi could fluctuate from article to article, or from time to time.

4. Modelling: For each POI, we aggregate the article-level relationship scores into a (POI-level) index over time. Specifically, the index for each POI starts with 0 on January 1, 2001. On each day, we aggregate the scores across all relevant articles and add the sum to the index. However, if a POI doesn't receive coverage on any day, their index value decays by 1% compared to the day before. In other words, without any further converge, an index, positive or negative, would converge to 0 in the long run. The idea of the decay assumption is that, for a politician who is highly placed and used to being positively and regularly covered by the party mouthpiece, no press essentially means bad press. On the other hand, when a politician previously covered negatively starts to retreat from the spotlight, it might suggest an improvement of status.

5. Visualization: We plot and deploy the numerical indices for all POIs and continue to update the results as new data continues to flow in.

We have released the source code of the PCI-Personnel project on GitHub, which can be found [here](https://github.com/PCI-ORG/PCI-Personnel).

---

## Main Results

While Figure 1 allows a user to select/unselect POIs to be plotted, we discuss the results for a few high-profile cases and demonstrate that the index is consistent with and in some cases leading the POI's political fortune.

Qin Gang had a meteoric rise in early 2023 after he was promoted from the Ambassador to the United States to the Minister of Foreign Affairs, and so did his PCI-Personnel index as shown in Figure 2. However, Qin's "stock" in the index started to trend downwards in late June 2023, weeks before rumors about his disappearance and subsequent ousting surfaced in late July.

Wang Yi, Qin's predecessor, became the foreign minister in 2013. However, his PCI-Personnel index did not take off until early 2018, shortly before he was named a state councilor, a high-ranking post in China's State Council, in March 2018. While his index declined temporarily during 2020, likely due to the COVID-19 pandemic that put China's foreign affairs on a pause, it continued to climb from 2021 to the present. The trend is consistent with his increasing prominence around Xi, including being promoted to the Politburo in 2022 and reinstated as the foreign minister in 2023 after Qin's downfall.

<strong>Figure 2. PCI-Personnel for Qin Gang and Wang Yi</strong>

![](personnel-fig2.png)
_Note: The figure was created on September 9, 2024._

Wang Huning, by now a well-known confidant and favored "political theorist" of Xi, is another case where the PCI-Personnel index timely captured his rise. A long-time protégé of the Chinese President, Wang started to assume important posts in early 2014, including being appointed as the inaugural director of the CCP's Central Commission for Deepening Reform. But his PCI-Personnel index took off prior to that in March 2013 (see Figure 3), when Xi took complete charge over the party and the country.

<strong>Figure 3. PCI-Personnel for Wang Huning</strong>

![](personnel-fig3.png)
_Note: The figure was created on September 9, 2024._

Finally, the rise and fall of Bo Xilai, the former politician who lost the power struggle against Xi in 2012, is marked in the PCI-Personnel as well. The index for Bo was above the water when he was the party head of Chongqing. However, it drastically dropped to negative starting from 2012 as Bo came under investigation for the Wang Lijun incident, was put on trial in 2013, and jailed later that year. The index continued to trend down for a few more years before bouncing back to 0 due to the model's decay mechanism.

<strong>Figure 4. PCI-Personnel for Bo Xilai</strong>

![](personnel-fig4.png)
_Note: The figure was created on September 9, 2024._

---

## Future Developments

A few improvements are in the roadmap of the algorithm's development:

1. Improve the scope and accuracy of the LLM analysis. We will continue to expand the list of POIs the algorithm tracks. We will also fine-tune the LLM to home in on *People's Daily* articles that are more substantively related to the relationship between a POI and Xi, as opposed to merely mentioning them together in passing, or even not mentioning them within the same context.

2. Account for the index's current bias against military officials. Because the *People's Daily* is a general-interest newspaper, military content—hence the coverage of military officials—carries a relatively smaller weight. This imbalance could be addressed by including other CCP publications that are more military-relevant, such as the *PLA Daily*.

3. Improve the model from a tracker to a predictor. While it's reassuring that the index generally tracks a politician's prominence, it would be of a much higher value if the index is a leading indicator of the (eventual) political fortune. We have demonstrated this predictive potential in a few examples above. Next, we will seek to have that predictive capability more generally across different politicians.

---

## Acknowledgement

This project is a collaboration between PCI and Gear Factory, a company specialized in deploying artificial intelligence solutions.