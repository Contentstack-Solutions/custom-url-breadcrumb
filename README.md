# Custom URL Breadcrumb

Custom URL Breadcrumb is a Contentstack UI Extension that provides customizable breadcrumb navigation for URL paths.

## Installation

1. Clone the repository:
   
   https://github.com/Contentstack-Solutions/custom-url-breadcrumb

2. Navigate to the project directory:

   cd custom-url-breadcrumb


3. Install the dependencies:

```
npm install
```

4. Start the development server:

```
npm run start
```

5. Go to the Contentstack Developer Hub and create a new app:
   - Enter a name and description for the app and click "Create."
   - In the "UI Location" field, enter the URL where the code is running (e.g., `http://localhost:3000`).

6. In the "Available Location(s)" section, click "Add" on "Custom Field":
   - Select "Text" as the data type.
   - Enter the path as `/custom-field`.
   - Click "Save."

7. Install the app in your stack:
   - Go to the app and click "Install App."
   - Select the stack from the dropdown and click "Install."

## Usage

1. Inside your stack, go to Content Models and create a new content type with the custom field.
2. Install the app for the content type.
3. Create an entry and configure the custom URL breadcrumb using the app.
