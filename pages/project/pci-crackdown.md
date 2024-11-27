---
title: "PCI-Crackdown"
---


The PCI-Crackdown series is a mapping from the current timeline to the Tiananmen timeline. The closer the indicator gets to the June 4 line, the higher the possibility of a Tiananmen-like crackdown.

**Figures: PCI-Crackdown for 2019-20 Hong Kong protests**

**Second wave: Apr 16 to Jul 20, 2020**
![](fig_hk19_w2_w_events.png)

**First wave: Jun 9, 2019 to Jan 7, 2020**
![](fig_hk19_w_events.png)

The figures above plot the PCI-Crackdown for the 2019-20 Hong Kong protests. Since the beginning of the movement, the indicator has seen significant fluctuations and has reached as high as May 26, 1989 --- less than ten counterfactual days from a crackdown. Furthermore, the indicator has stayed well within three weeks from the crackdown date, suggesting that, at least at the time of this writing, the political crisis in Hong Kong is far from over.

--- 

## Background

The year 2019 has seen a series of protests in Hong Kong that persists to the time of writing. The movement began as an opposition to a proposed extradition bill --- which, if enacted, would allow the extradition of alleged criminals in Hong Kong to mainland China --- and it soon turned into violent confrontations between protesters and the police. As the crisis escalated, the Chinese government ratcheted up its pressure campaign on Hong Kong, spurring speculation of a Tiananmen-like, military crackdown on the semi-autonomous city.

The Policy Change Index for Crackdown (PCI-Crackdown) proposes a machine learning method to predict if and when such a crackdown will take place. The algorithm takes as input protest-related articles published in the *People's Daily* --- the official newspaper of the Communist Party of China --- and generates a daily prediction of how close in time the Hong Kong protests might be to another June 4 crackdown.

---

## Methodology

The PCI-Crackdown is built on an inevitable relationship between state propaganda and state suppression. That is, even though authoritarian regimes do not have free and fair elections, public opinion still matters to the government, especially regarding such contentious, destructive "policies" as military crackdowns. In the days of the 1989 Tiananmen Square protests leading up to the June 4 crackdown, China's state-run media had drastically changed their rhetoric on the protests. The rationale for the negative campaign is straightforward: Conditional on a decision to crack down, preparing the public for the action ahead of time would reduce the associated political costs. Therefore, while we may not know the conditions under which the state decides to crack down on protests, we may still be able to foresee an imminent suppression if a significant propaganda buildup is detected.

To detect propaganda buildups, we build an algorithm to "read" People's Daily articles in 1989 that are relevant to the Tiananmen Square protests. The algorithm learns to predict the date of publication for each sentence of each article. Once the algorithm is trained, we deploy the program to People's Daily articles in 2019-20 that are relevant to the Hong Kong protests. Because the algorithm learns from the past, the input from 2019-20 will inevitably be mistaken as coming from 1989. This error is exactly what we aim for: Each date in the 2019-20 Hong Kong protest timeline is cast back to the Tiananmen Square protest timeline, and the counterfactual date is defined as the PCI-Crackdown for the (factual) current date.

Because a Tiananmen-like crackdown has never happened twice in China, it is infeasible to validate true positives. However, we are able to validate true negatives using the 2014 Hong Kong protests, which were smaller in scale and that did not suffer a Tiananmen-like crackdown. We show that the PCI-Crackdown for 2014 Hong Kong protests is indeed relatively lower, and it indeed declines over time as the protests wane off.

Technical details of the methodology can be found in Section 3 of our [research paper](https://www.mercatus.org/publications/technology-and-innovation/predicting-authoritarian-crackdowns), "Predicting Authoritarian Crackdowns: A Machine Learning Approach.". We have also released the source code of the project on GitHub, which can be found [here](https://github.com/PSLmodels/PCI-Crackdown).

---

## Validation

In the figure below, we conduct a similar analysis of the 2014 Hong Kong protests as a partial validation of our approach. In comparison to the 2019-20 episode, the 2014 episode have a generally lower PCI-Crackdown score. Moreover, the indicator's value trended down over time. This is consistent with what happened in 2014: The protests lost momentum not long after they started, and no crackdown took place either --- a true negative prediction.

<br/>

#### **Figure: PCI-Crackdown for 2014 Hong Kong protests, Sep 26 to Dec 15**

![](fig_hk14.png)

Note: The PCI-Crackdown series is a mapping from the current timeline to the Tiananmen timeline. The closer the indicator gets to the June 4 line, the higher the possibility of a Tiananmen-like crackdown.

---

## Potential Applications

The research design of the PCI-Crackdown has wide applicability. This is because the method leverages the fact that there is a well-defined event with a monotonically increasing severity (i.e., the Tiananmen Square crackdown) and that the data label to be predicted --- the time of publication --- is easily available in the data set as a metadata column. The same method can be applied to any other setting in which these two conditions are met.