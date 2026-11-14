# Analyze — File Upload responsive geometry evidence

## Evidence

Viewport width was set to 390px and 320px in the live browser. Due to the vertical scrollbar, `innerWidth` was 390/320px while document client width was 375/305px.

| Viewport | Render | Document client/scroll | Outer frame | Inner Dropzone |
| --- | --- | --- | --- | --- |
| 390px | Norato | 375/375px | 328×300px | 310×152px |
| 390px | Reference | 375/375px | 327×300px | 320.76×153.63px |
| 320px | Norato | 305/305px | 273×300px | 255×152px |
| 320px | Reference | 305/326px | 257×300px | 245.16×174.42px |

## Assessment before correction

At 390px, frame size is within 1px and inner height is within 1.63px, while Norato's inner Dropzone is 10.76px narrower. At 320px, local document layout remains bounded but the frame is 16px wider; the local 152px panel avoids vertical growth while the reference panel is 22.42px taller and its document has 21px horizontal overflow. The current mobile padding contributes to the inner-width mismatch. Reduce that padding to the existing 4px semantic spacing token and cap the 320px frame to the measured 257px reference width. Keep the local panel's fixed height. This should bring 390px inner width to about 318px and 320px inner width to about 247px without adding overflow.

## Post-correction evidence

At 390px, Norato remains 328×300px with an inner panel of 318×152px and document width 375/375px. The reference remains 327×300px with an inner panel of 320.76×153.63px. At 320px, Norato is now 257×300px with a 247×152px inner panel; document width remains 305/305px. The reference is 257×300px with a 245.16×174.42px panel and document width 305/326px. Screenshots show the local RTL composition contained without vertical stretch. The change brings geometry close at both widths while preserving fixed height and zero overflow.
