# ElectronDemo
# Sample Electron App

This is a sample Electron app with a GUI demo. Follow the instructions below to download and run the app.

## Prerequisites

To run this app, you'll need to have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/) (version 12 or higher)

## Downloading the code

To download the code, follow these steps:

1. Go to the [GitHub repository](https://github.com/WatsonMLDev/ElectronDemo) for this app.
2. Click the "Code" button and select "Download ZIP" to download the code as a ZIP file.
3. Extract the ZIP file to a location on your computer.

Alternatively, you can clone the repository using Git:

```git clone https://github.com/WatsonMLDev/ElectronDemo.git```

## Installing dependencies

Before you can run the app, you'll need to install its dependencies. Open a terminal or command prompt and navigate to the directory where you extracted the code.

```cd /path/to/sample-electron-app```

Then, run the following command:

```npm install```

This will install all the necessary dependencies for the app.

## Running the app

To run the app, run the following command from the `frontend` directory:

```npm start```


This will start the Electron app. You should see a window appear with the demo GUI.

## Packaging the app

This electron demo uses `electron-packager` to package the app. To package the app, run the following command from the `frontend` directory:

```electron-packager . --overwrite --platform={INSERT_PLATFORM} --arch={INSERT_ARCHITECTURE}```

The `--platform` options are `win32`, `darwin`(MacOS), and `linux`. 
The `--arch` options are `ia32`, `x64`, and `armv7l`.

Most likely, you will want to choose `x64` as your architecture.
For your platform, choose the platform you want to run it on.

**NOTE:** windows users **CAN NOT** build for `darwin` or `linux`, you must be on a unix opperating system to build for `darwin` or `linux`.

## Further help

If you run into any issues or have any questions, feel free to [open an issue](https://github.com/WatsonMLDev/ElectronDemo/issues)
