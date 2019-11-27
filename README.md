# Interview projects

This Repo holds some of the tasks / challenges that I have done for Interviews over time.

## Blue Interview Solution

This Solution is for the challenge of listing out a JSON file and creating a pop up functionality with additional data.

**Project Requirements**

Task 1:

- Create a web page which displays a list of user names.
- The list is read from a JSON file. You’ll have to design the JSON format yourself.

Task 2:

- Create a reusable JavaScript control which will display a business card for a user in the list
- The business card will show at least the users name, job title, email address, company name and phone number
- The business card will pop-up
- Add one extra feature based on what you think is important

**Solution**

Requirements fulfilled:

- The user list is pulled in from a json file, and rendered to the page
- A business card pop up with the selected user's data (the hero list and card).

Additional feature:

- We can pass in json (data) and html (presentation) into the javascript class, this matches the json keys to the element classes in the html, this creates a solution where you can mix and match the data and presentation to display the user needs (the villain list and cards).



## ZG Interview Project

This project is based on a snapshot design as part of a front-end job interview process. It is a one-page site with minimal complexity. 

Live example: [willbrennan.tech/responsive-example/](https://willbrennan.tech/responsive-example/)

**Project Requirements & Solutions**

Layout with Bootstrap 3:

- Used bootstrap 3 CDN
- Sections of the page use the grid system to layout the content as needed.
- I used glyphicons where possible because of usability and scalability.
- I used additional classes such as “img-responsive” to let images fill out their containers better, but I find in many cases of building responsive sites additional style is required in media queries.

Styles created using LESS:

- This is the first project I created using LESS, usually I build using straight CSS. I found this experience beneficial and interesting to add operations and logic to the CSS.
- I used CodeKit to compile the less into .css to serve to the front end.
- One of the most useful parts of this is that I can set variable for dimensions and colour scheme that would need to be used throughout at a single point.

Responsive (mobile also):

- The site is fully responsive, with 4 major stages with a min-width of 320px.
- This includes font and sections getting larger and smaller as needed.

All browsers ie8+, chrome, firefox:

- The site has been tested and debugged for the latest versions of Chrome, Firefox, Safari, Opera and of course Internet Explorer, which was tested in IE8-11.

If you see ways to improve the layout, don't hesitate:

- I took the liberty of having the header buttons stack nicely together for mobile versions.
- I’m using Masonry.js to let the contents shift and be placed into the dimensions necessary for the users device.
- I increased all the content sections sizes to 300x300 instead of 220x220 for the smallest mobile version to have the entire content list nicely together including the large promo tile. I also increased the login div size for the mobile versions.
- I photoshopped larger versions of the social links in the footer so that a larger more prominent button can be seen in the mobile version.

If possible showcase whatever skills you wish to show (css3 animations, transitions, etc):

- I mostly added small animations here and there, like the masonry.
- I added a slide toggle to the login form to open and close.
- I added a hover opacity and show price to the tiles with the woman in the dark coat. In the price label, the heart and basket icons grow larger on mouseover.
- When the small tiles (woman with dark coat) are clicked a custom-built zoom lightbox is opened. For desktop version the image  shifts devending on the cursor on the image viewport. For mobile, arrow buttons appear that when click the image shifts in the clicked direction. To be honest I am not fully happy with the mobile version and I believe it needs more UI work.
- On mouseover the large promo image a text title animates from the right to caption the image.


**Additional Notable Features**

- The triangle corner background was build with responsiveness in mind. This sets a reduced png image that’s 4kb in size with a background colour to the needed percentage position and scales out for all modern devices.
- The logo is based on an image because most logos have graphical elements. Standard practice for me is to have text where possible to be live text.
- All form fields are ready to be hooked up to whatever backend needed.
- Using a free google font to match the design’s font well.
- Using an oldie.less (oldie.css) to implement the code within media queries in <=ie8. This implements old IE classes that are needed such are filter rotation and classes that do not come with the bootstrap CDN. Additionally an alternative triangle background image is used because the responsive implementation doesn’t work in IE.
- For the input fields, the placeholder attribute works for modern browsers but old IE does not. Because of this I have implemented JS to do this job for all browsers.
- All site based images (arrow, background, buttons etc.) have been made into PNG files and using reduction techniques, are the equivalent size of a JPG. This is beneficial for modifying the files in future and seamlessly blending elements together.
- Most generic plugins used are gotten from CDN, for best practice reasons etc. (http://www.sitepoint.com/7-reasons-to-use-a-cdn/)
