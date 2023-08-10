# ImageCarousel_InSimpleWay
# The Main goal is to Understand The Logic How it is working.
# Open project code one side and this readme another side to better understand what I'm trying to say.
Check out Demo: https://simplifiedweb.github.io/ImageCarousel_InSimpleWay/

Designing might be easy, but understanding the logic is crucial. Let's focus on the logic behind creating an image slider step by step:

Step 1: Imagine having 5 images where clicking right moves to the next image and clicking left moves to the previous one.

Step 2: You need left and right buttons for navigation.

Step 3: Create a container for the images. Decide the structure step by step.

Step 4: Create individual containers for each image. Assign classes for targeting all images with the same class and unique ones for distinct targeting. This helps in looping through images one by one, showing only one image at a time (with display: none for the others).

Step 5: Use getElementsByClassName to get an HTML collection of containers. Loop through it to access each element by index.

Step 6: Set up everything based on your structure.

Step 7: Navigation is based on index targeting. Create an index variable, initially set to 0. This variable helps track the index of the images array obtained from getElementsByClassName. For example, images[0].style.display = 'block'.

When clicking the "next" button:

Start from index = 0, then index = 1, index = 2, and so on.

Since you have 5 images, the array length is 5, but indices start from 0, so it should go up to 4.

When reaching the last image, if index === images.length, set index = 0 to start again.

When clicking the "left" button:

When starting from the last image, use the condition if index === images.length to reset index = 0.
This allows backward navigation from the last image.
The crucial aspect is displaying only one image at a time. JavaScript executes code line by line. So, immediately after hiding all images using display: none, set the current index image to display: block.

For hiding and showing images, you can use the following logic:

// Hide all images
for (let i = 0; i < images.length; i++) {

    images[i].style.display = 'none';
    
}

// Show the current index image
images[index].style.display = 'block';

Understanding JavaScript's sequential execution is essential. By referencing the provided JavaScript code, you'll gain a clear understanding of the functionality.

Please feel free to ask if you have any questions or need further clarification.
