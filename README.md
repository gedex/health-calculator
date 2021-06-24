health-calculator
=================

A library to help calculate well known health-related metrics.

## Install

```
npm i health-calculator
```

## Usage

```
import hc from 'health-calculator';

console.log( hc.dietary.tdee( 'male', 20, 80, 180, 'moderate' ) );
```

or:

```
const hc = require( 'health-calculator' );

console.log( hc.dietary.tdee( 'male', 20, 80, 180, 'moderate' ) );
```

See API reference for more.

## API Reference

## Modules

<dl>
<dt><a href="#module_body_measurement">body_measurement</a></dt>
<dd></dd>
<dt><a href="#module_dietary">dietary</a></dt>
<dd></dd>
<dt><a href="#module_sports">sports</a></dt>
<dd></dd>
<dt><a href="#module_util">util</a></dt>
<dd></dd>
</dl>

<a name="module_body_measurement"></a>

## body\_measurement

* [body_measurement](#module_body_measurement)
    * [~bmi(weight, height, imperial)](#module_body_measurement..bmi) ⇒ <code>number</code>
    * [~whtr(waistCircumference, height, imperial)](#module_body_measurement..whtr) ⇒ <code>number</code>
    * [~whtrCategory(gender, age, ratio)](#module_body_measurement..whtrCategory) ⇒ <code>BodyCategory</code>
    * [~whtrChildren(ratio)](#module_body_measurement..whtrChildren) ⇒ <code>BodyCategory</code>
    * [~whtrMale(ratio)](#module_body_measurement..whtrMale) ⇒ <code>BodyCategory</code>
    * [~whtrFemale(ratio)](#module_body_measurement..whtrFemale) ⇒ <code>BodyCategory</code>
    * [~whr(waistCircumference, hipCircumference, imperial)](#module_body_measurement..whr) ⇒ <code>number</code>
    * [~bfp(gender, age, bmi)](#module_body_measurement..bfp) ⇒ <code>number</code>
    * [~lbm(gender, weight, height, imperial)](#module_body_measurement..lbm) ⇒ <code>number</code>
    * [~rfm(gender, height, waistCircumference, imperial)](#module_body_measurement..rfm) ⇒ <code>number</code>
    * [~ffmi(weight, height, bodyFat, imperial)](#module_body_measurement..ffmi) ⇒ <code>number</code>

<a name="module_body_measurement..bmi"></a>

### body_measurement~bmi(weight, height, imperial) ⇒ <code>number</code>
Calculates body mass index (BMI).

**Kind**: inner method of [<code>body\_measurement</code>](#module_body_measurement)  
**Returns**: <code>number</code> - BMI.  

| Param | Type | Description |
| --- | --- | --- |
| weight | <code>number</code> | Weight of a person. |
| height | <code>number</code> | Height of a person. |
| imperial | <code>boolean</code> | Flag to use imperial (lb and inch). Default to use metric (kg and cm). |

<a name="module_body_measurement..whtr"></a>

### body_measurement~whtr(waistCircumference, height, imperial) ⇒ <code>number</code>
Calculates waist-to-height ratio (WHtR).

**Kind**: inner method of [<code>body\_measurement</code>](#module_body_measurement)  
**Returns**: <code>number</code> - WHtR.  
**See**: [https://en.wikipedia.org/wiki/Waist-to-height_ratio](https://en.wikipedia.org/wiki/Waist-to-height_ratio)  

| Param | Type | Description |
| --- | --- | --- |
| waistCircumference | <code>number</code> | Waist circumference of a person. |
| height | <code>number</code> | Height of a person. |
| imperial | <code>boolean</code> | Flag to use imperial (lb and inch). Default to use metric (kg and cm). |

<a name="module_body_measurement..whtrCategory"></a>

### body_measurement~whtrCategory(gender, age, ratio) ⇒ <code>BodyCategory</code>
Categorize the boundaries for WHtR in terms of their health implications.

**Kind**: inner method of [<code>body\_measurement</code>](#module_body_measurement)  
**Returns**: <code>BodyCategory</code> - Category.  
**See**: [https://en.wikipedia.org/wiki/Waist-to-height_ratio#Health_implications](https://en.wikipedia.org/wiki/Waist-to-height_ratio#Health_implications)  

| Param | Type | Description |
| --- | --- | --- |
| gender | <code>Gender</code> | 'male' or 'female'. |
| age | <code>number</code> | Age between 18 and 120. |
| ratio | <code>number</code> | WHtR. |

<a name="module_body_measurement..whtrChildren"></a>

### body_measurement~whtrChildren(ratio) ⇒ <code>BodyCategory</code>
WHtR category for children (up to 15 yeard old).

**Kind**: inner method of [<code>body\_measurement</code>](#module_body_measurement)  
**Returns**: <code>BodyCategory</code> - Category.  

| Param | Type | Description |
| --- | --- | --- |
| ratio | <code>number</code> | WHtR. |

<a name="module_body_measurement..whtrMale"></a>

### body_measurement~whtrMale(ratio) ⇒ <code>BodyCategory</code>
WHtR category for adult male.

**Kind**: inner method of [<code>body\_measurement</code>](#module_body_measurement)  
**Returns**: <code>BodyCategory</code> - Category.  

| Param | Type | Description |
| --- | --- | --- |
| ratio | <code>number</code> | WHtR. |

<a name="module_body_measurement..whtrFemale"></a>

### body_measurement~whtrFemale(ratio) ⇒ <code>BodyCategory</code>
WHtR category for adult female.

**Kind**: inner method of [<code>body\_measurement</code>](#module_body_measurement)  
**Returns**: <code>BodyCategory</code> - Category.  

| Param | Type | Description |
| --- | --- | --- |
| ratio | <code>number</code> | WHtR. |

<a name="module_body_measurement..whr"></a>

### body_measurement~whr(waistCircumference, hipCircumference, imperial) ⇒ <code>number</code>
Calculates waist-to-hip ratio (WHR).

**Kind**: inner method of [<code>body\_measurement</code>](#module_body_measurement)  
**Returns**: <code>number</code> - WHR.  
**See**: [https://en.wikipedia.org/wiki/Waist%E2%80%93hip_ratio](https://en.wikipedia.org/wiki/Waist%E2%80%93hip_ratio)  

| Param | Type | Description |
| --- | --- | --- |
| waistCircumference | <code>number</code> | Waist circumference of a person. |
| hipCircumference | <code>number</code> | Hip circumference of a person. |
| imperial | <code>boolean</code> | Flag to use imperial (lb and inch). Default to use metric (kg and cm). |

<a name="module_body_measurement..bfp"></a>

### body_measurement~bfp(gender, age, bmi) ⇒ <code>number</code>
Calculates body fat percentage (BFP) using BMI.

**Kind**: inner method of [<code>body\_measurement</code>](#module_body_measurement)  
**Returns**: <code>number</code> - BFP.  
**See**: [https://en.wikipedia.org/wiki/Body_fat_percentage#From_BMI](https://en.wikipedia.org/wiki/Body_fat_percentage#From_BMI)  

| Param | Type | Description |
| --- | --- | --- |
| gender | <code>Gender</code> | 'male' or 'female'. |
| age | <code>number</code> | Age between 18 and 120. |
| bmi | <code>number</code> | BMI result. |

<a name="module_body_measurement..lbm"></a>

### body_measurement~lbm(gender, weight, height, imperial) ⇒ <code>number</code>
Calculates lean body mass (LBM) using the Boer formula.

**Kind**: inner method of [<code>body\_measurement</code>](#module_body_measurement)  
**Returns**: <code>number</code> - LBM.  
**See**: [https://en.wikipedia.org/wiki/Lean_body_mass#Boer[3]](https://en.wikipedia.org/wiki/Lean_body_mass#Boer[3])  

| Param | Type | Description |
| --- | --- | --- |
| gender | <code>Gender</code> | 'male' or 'female'. |
| weight | <code>number</code> | Weight of a person. |
| height | <code>number</code> | Height of a person. |
| imperial | <code>boolean</code> | Flag to use imperial (lb and inch). Default to use metric (kg and cm). |

<a name="module_body_measurement..rfm"></a>

### body_measurement~rfm(gender, height, waistCircumference, imperial) ⇒ <code>number</code>
Calculates relative fat mass (RFM).

**Kind**: inner method of [<code>body\_measurement</code>](#module_body_measurement)  
**Returns**: <code>number</code> - RFM.  

| Param | Type | Description |
| --- | --- | --- |
| gender | <code>Gender</code> | 'male' or 'female'. |
| height | <code>number</code> | Height of a person. |
| waistCircumference | <code>number</code> | Waist circumference of a person. |
| imperial | <code>boolean</code> | Flag to use imperial (lb and inch). Default to use metric (kg and cm). |

<a name="module_body_measurement..ffmi"></a>

### body_measurement~ffmi(weight, height, bodyFat, imperial) ⇒ <code>number</code>
Calculates fat-free mass index (FFMI).

**Kind**: inner method of [<code>body\_measurement</code>](#module_body_measurement)  
**Returns**: <code>number</code> - FFMI.  

| Param | Type | Description |
| --- | --- | --- |
| weight | <code>number</code> | Weight of a person. |
| height | <code>number</code> | Height of a person. |
| bodyFat | <code>number</code> | Body fat percentage. |
| imperial | <code>boolean</code> | Flag to use imperial (lb and inch). Default to use metric (kg and cm). |

<a name="module_dietary"></a>

## dietary

* [dietary](#module_dietary)
    * [~bmr(gender, age, weight, height, imperial, equation)](#module_dietary..bmr) ⇒ <code>number</code>
    * [~bmrHarrisBenedict(gender, age, weight, height)](#module_dietary..bmrHarrisBenedict) ⇒ <code>number</code>
    * [~bmrRozaAndShizgal(gender, age, weight, height)](#module_dietary..bmrRozaAndShizgal) ⇒ <code>number</code>
    * [~bmrMifflin(gender, age, weight, height)](#module_dietary..bmrMifflin) ⇒ <code>number</code>
    * [~tdee(gender, age, weight, height, activity, imperial, equation)](#module_dietary..tdee) ⇒ <code>number</code>
    * [~amdr(gender, age, weight, height, activity, imperial, equation)](#module_dietary..amdr) ⇒ <code>number</code>

<a name="module_dietary..bmr"></a>

### dietary~bmr(gender, age, weight, height, imperial, equation) ⇒ <code>number</code>
Calculates basal metabolic rate (BMW); the number of calories our body needs
to accomplish its most basic (basal) life-sustaining functions.

**Kind**: inner method of [<code>dietary</code>](#module_dietary)  
**Returns**: <code>number</code> - BMI.  

| Param | Type | Description |
| --- | --- | --- |
| gender | <code>Gender</code> | 'male' or 'female'. |
| age | <code>number</code> | Age between 18 and 120. |
| weight | <code>number</code> | Weight between 15kg and 635kg. |
| height | <code>number</code> | Height of a person. |
| imperial | <code>boolean</code> | Flag to use imperial (lb and inch). Default to use metric (kg and cm). |
| equation | <code>BmrEquation</code> | Equation to use ('harrisBenedict', 'rozaAndShizgal', or 'mifflin'). Default to 'mifflin'. |

<a name="module_dietary..bmrHarrisBenedict"></a>

### dietary~bmrHarrisBenedict(gender, age, weight, height) ⇒ <code>number</code>
Calculates BMR using Harris-Benedict equation.

**Kind**: inner method of [<code>dietary</code>](#module_dietary)  
**Returns**: <code>number</code> - BMR.  
**See**: [https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation](https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation)  

| Param | Type | Description |
| --- | --- | --- |
| gender | <code>Gender</code> | 'male' or 'female'. |
| age | <code>number</code> | Age between 18 and 120. |
| weight | <code>number</code> | Weight between 15kg and 635kg. |
| height | <code>number</code> | Height of a person. |

<a name="module_dietary..bmrRozaAndShizgal"></a>

### dietary~bmrRozaAndShizgal(gender, age, weight, height) ⇒ <code>number</code>
Calculates BMR using revised Harris-Benedict equation by Roza and Shizgal.

**Kind**: inner method of [<code>dietary</code>](#module_dietary)  
**Returns**: <code>number</code> - BMR.  
**See**: [https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation](https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation)  

| Param | Type | Description |
| --- | --- | --- |
| gender | <code>Gender</code> | 'male' or 'female'. |
| age | <code>number</code> | Age between 18 and 120. |
| weight | <code>number</code> | Weight between 15kg and 635kg. |
| height | <code>number</code> | Height of a person. |

<a name="module_dietary..bmrMifflin"></a>

### dietary~bmrMifflin(gender, age, weight, height) ⇒ <code>number</code>
Calculates BMR using revised Harris-Benedict equation by Mifflin.

**Kind**: inner method of [<code>dietary</code>](#module_dietary)  
**Returns**: <code>number</code> - BMR.  
**See**: [https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation](https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation)  

| Param | Type | Description |
| --- | --- | --- |
| gender | <code>Gender</code> | 'male' or 'female'. |
| age | <code>number</code> | Age between 18 and 120. |
| weight | <code>number</code> | Weight between 15kg and 635kg. |
| height | <code>number</code> | Height of a person. |

<a name="module_dietary..tdee"></a>

### dietary~tdee(gender, age, weight, height, activity, imperial, equation) ⇒ <code>number</code>
Calculates total daily energy expenditure (TDEE); the number of calories our
body burns daily to perform its bodily functions based on activity level.

**Kind**: inner method of [<code>dietary</code>](#module_dietary)  
**Returns**: <code>number</code> - BMR.  

| Param | Type | Description |
| --- | --- | --- |
| gender | <code>Gender</code> | 'male' or 'female'. |
| age | <code>number</code> | Age between 18 and 120. |
| weight | <code>number</code> | Weight between 15kg and 635kg. |
| height | <code>number</code> | Height of a person. |
| activity | <code>ActivityLevel</code> | Activity level. |
| imperial | <code>boolean</code> | Flag to use imperial (lb and inch). Default to use metric (kg and cm). |
| equation | <code>BmrEquation</code> | Equation to use ('harrisBenedict', 'rozaAndShizgal', or 'mifflin'). Default to 'mifflin'. |

<a name="module_dietary..amdr"></a>

### dietary~amdr(gender, age, weight, height, activity, imperial, equation) ⇒ <code>number</code>
Calculates acceptable macronutrient range (AMDR).

**Kind**: inner method of [<code>dietary</code>](#module_dietary)  
**Returns**: <code>number</code> - BMR.  

| Param | Type | Description |
| --- | --- | --- |
| gender | <code>Gender</code> | 'male' or 'female'. |
| age | <code>number</code> | Age between 18 and 120. |
| weight | <code>number</code> | Weight between 15kg and 635kg. |
| height | <code>number</code> | Height of a person. |
| activity | <code>ActivityLevel</code> | Activity level. |
| imperial | <code>boolean</code> | Flag to use imperial (lb and inch). Default to use metric (kg and cm). |
| equation | <code>BmrEquation</code> | Equation to use ('harrisBenedict', 'rozaAndShizgal', or 'mifflin'). Default to 'mifflin'. |

<a name="module_sports"></a>

## sports

* [sports](#module_sports)
    * [~oneRm(reps, weight, formula)](#module_sports..oneRm) ⇒ <code>number</code>
    * [~hrMax(age, formula)](#module_sports..hrMax) ⇒ <code>number</code>

<a name="module_sports..oneRm"></a>

### sports~oneRm(reps, weight, formula) ⇒ <code>number</code>
Calculates one-repetition maximum (1RM) using various formula.

**Kind**: inner method of [<code>sports</code>](#module_sports)  
**Returns**: <code>number</code> - One rep max.  

| Param | Type | Description |
| --- | --- | --- |
| reps | <code>number</code> | Number of repetition of a given weight. |
| weight | <code>number</code> | Weight being lifted for a given reps. |
| formula | <code>OneRmFormula</code> | Formula to use. |

<a name="module_sports..hrMax"></a>

### sports~hrMax(age, formula) ⇒ <code>number</code>
Calculates maximum heart rate (HR) of a given age and formula.

**Kind**: inner method of [<code>sports</code>](#module_sports)  
**Returns**: <code>number</code> - HRmax in BPM (beats per minute).  

| Param | Type | Description |
| --- | --- | --- |
| age | <code>number</code> | Person age. |
| formula | <code>HRMaxFormula</code> | Formula to use. |

<a name="module_util"></a>

## util

* [util](#module_util)
    * [~cmToInch(cm)](#module_util..cmToInch) ⇒ <code>number</code>
    * [~inchToCm(inch)](#module_util..inchToCm) ⇒ <code>number</code>
    * [~lbToKg(lb)](#module_util..lbToKg) ⇒ <code>number</code>
    * [~kgToLb(kg)](#module_util..kgToLb) ⇒ <code>number</code>

<a name="module_util..cmToInch"></a>

### util~cmToInch(cm) ⇒ <code>number</code>
Converts cm to inch.

**Kind**: inner method of [<code>util</code>](#module_util)  
**Returns**: <code>number</code> - Length in inch.  

| Param | Type | Description |
| --- | --- | --- |
| cm | <code>number</code> | Length in cm. |

<a name="module_util..inchToCm"></a>

### util~inchToCm(inch) ⇒ <code>number</code>
Converts inch to cm.

**Kind**: inner method of [<code>util</code>](#module_util)  
**Returns**: <code>number</code> - Length in cm.  

| Param | Type | Description |
| --- | --- | --- |
| inch | <code>number</code> | Length in inch. |

<a name="module_util..lbToKg"></a>

### util~lbToKg(lb) ⇒ <code>number</code>
Converts lb to kg.

**Kind**: inner method of [<code>util</code>](#module_util)  
**Returns**: <code>number</code> - Weight in kg.  

| Param | Type | Description |
| --- | --- | --- |
| lb | <code>number</code> | Weight in lb. |

<a name="module_util..kgToLb"></a>

### util~kgToLb(kg) ⇒ <code>number</code>
Converts kg to lb.

**Kind**: inner method of [<code>util</code>](#module_util)  
**Returns**: <code>number</code> - Weight in lb.  

| Param | Type | Description |
| --- | --- | --- |
| kg | <code>number</code> | Weight in kg. |

