# Create Copy of onePOS ONLINEORDER.LOG

This is a light-weight NodeJS application that creates a copy of the onePOS ONLINEORDER.LOG file and appends the current date and time

## Installation

1. Install [NodeJS](https://nodejs.org/en/)

2. Clone this repo using `git clone` or download the ZIP and extract it directly into the `C:\onePOS\LOGS\` directory

```sh
cd C:\onePOS\LOGS
git clone https://github.com/EBTF/copy-olo-logs-onepos.git
```

You should now have a `copy-logo-logs-onepos` folder inside of the `LOGS` folder

3. Install dependencies using `npm`

```sh
npm install
```

## Usage(single)

To create a one-time copy of the ONLINEORDER.LOG file, run the following command inside the `copy-olo-logs-onepos` folder
```sh
node index.js
```

## Usage(Task Scheduler)

To schedule this application to run every `X` hours, minutes, etc., you can use the Windows Task Scheduler

COMING SOON!


## License
[MIT](https://choosealicense.com/licenses/mit/)