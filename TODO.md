# load-calculator TO DO items

### Standalone package vs Meteor page

- Standalone (Vite) version at `git@github.com:Back2Dev/load-calculator.git`
- Refactored to match structure within Meteor project
- Compare the two with `bcomp src/pages/load-calc/ ~/map/ultimate/ekit-app/imports/ui/pages/test-page/load-calc/`

### PDF

- Remove PDFMake and react/pdf from package.json
- Remove Download button --done

### Styling

- Add logo to top banner (Left)
- Add company name to banner (right) --probably shouldnt do this
- List items (`<ul>`) are rendering in white --done
- Typography is different from https://dpasolar.com.au/app/dev/ --done
- src/index.css references `font-family: 'Montserrat';` --done
- Don't use 100vw to force width
- Don't use 100vh to force height
- "HOURS PER DAY" is cramped, as is "WATTS PER DAY" --done
- Column headings should be repeated on each table
- For Bullet points, use `<ul>`, for numbers, use `<ol>` --done

### Additional fields

- Add verbiage to say

We will keep a copy of your calculations for future reference. We can email a PDF file to you for your own records. Please provide an email address, and a reference for the calculation, which can be a customer name, company name or property address, or even a reference number.

If you would like us to advise you on selecting components that will

1. be compatible and
2. cope with variations on load within a margin of safety

### Terms etc

- Privacy statement
- Calculations are approximate, and are only as accurate as the numbers you have provided
- You should allow a margin of safety when purchasing equipment
