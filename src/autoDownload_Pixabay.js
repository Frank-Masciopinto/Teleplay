console.log('autoDownload Pixabay');
import { click } from './constants';
const all_videos_in_search = document.querySelectorAll(
  'a[href^="https://pixabay.com/videos/"]:not([class])'
);

// Function to handle the action completion
function handleActionComplete(element) {
  console.log(`Action completed for element: ${element.href}`);
  // Continue the loop or perform any other desired actions
}

function download_video() {
  let buttons = document.querySelectorAll('button');

  // Find the button with inner text "Download"
  let downloadButton = null;
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerText === 'Download') {
      downloadButton = buttons[i];
      break;
    }
  }

  // Check if the button element is found
  if (downloadButton) {
    // Do something with the button
    console.log(downloadButton);
    downloadButton.click();
    setTimeout(() => {
      let all_resolutions = document.querySelectorAll(
        'div[class*="downloadItem"]'
      );
      if (all_resolutions.length > 0) {
        let lastElement = all_resolutions[all_resolutions.length - 1];
        lastElement.click();
        setTimeout(() => {
          downloadButton.click();
          setTimeout(() => {
            console.log('clicking download...');
            all_resolutions = document.querySelectorAll(
              'div[class*="downloadItem"]'
            );
            lastElement = all_resolutions[all_resolutions.length - 1];
            console.log(
              lastElement.parentElement.parentElement.nextElementSibling
                .firstChild
            );
            click(
              lastElement.parentElement.parentElement.nextElementSibling
                .firstChild
            );
            setTimeout(() => {
              window.close();
            }, 3000);
          }, 2000);
        }, 1000);
      } else {
        console.log('No all_resolutions found.');
        download_video();
      }
    }, 500);
  } else {
    // Button not found
    console.log('Button not found.');
  }
}
function injectDownloadVideoScript() {
  var script = document.createElement('script');
  script.src = chrome.runtime.getURL('./autoclick.js');
  document.head.appendChild(script);
}

// Function to iterate over the elements and open them in new tabs
function openElementsInTabs() {
  let index = 0;

  function processNextElement() {
    if (index >= all_videos_in_search.length) {
      // All elements have been processed
      console.log('All elements processed');
      return;
    }

    const element = all_videos_in_search[index];
    index++;

    const newTab = window.open(
      element.href + '?revelationCE',
      '_blank',
      'noopener'
    );
    // Perform the action on the new tab and wait for completion
    // You need to modify this part with your specific action
    // For demonstration purposes, we're just waiting for a few seconds before simulating the action completion
    setTimeout(function () {
      handleActionComplete(element);
      processNextElement(); // Process the next element
    }, 7000); // Adjust the timeout as needed
  }

  // Start the iteration process
  processNextElement();
}

// Call the function to open elements in new tabs and process them
if (document.URL.includes('/search/')) {
  openElementsInTabs();
}
if (document.URL.includes('?revelationCE')) {
  // Call the function to inject the script
  download_video();
}
