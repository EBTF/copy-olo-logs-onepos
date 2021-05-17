# Create Copy of onePOS ONLINEORDER.LOG

This is a light-weight NodeJS application that creates a copy of the onePOS ONLINEORDER.LOG file and appends the current date and time

## Installation

1. Install [NodeJS](https://nodejs.org/en/) and make sure to add it to the Windows PATH

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

## Usage (single-use)

To create a one-time copy of the ONLINEORDER.LOG file, run the following command inside the `copy-olo-logs-onepos` folder
```sh
node index.js
```

## Usage (time-period)

To schedule this application to run every `X` hours, minutes, etc., you can use the Windows Task Scheduler

1. Find the Windows Task Scheduler under `Control Panel -> Administrative Tools -> Task Scheduler`

2. On the right hand side, click `Create Task...`

3. Give the task a name, eg. `Copy OLO Log`

4. Navigate to the `Triggers` tab and click `New...`

5. To set it up to run every hour, select the `Repeat task every:` checkbox and select `1 hour` for a duration of `indefinitely`

    5a. Set the `Start` time at the top to start at the next hour and it will run every hour on the hour

6. Navigate to the `Actions` tab and click `New...`

7. Keep the `Action` as "Start a Program"

8. Set the `Program/Script` to be the file path to `node.exe`

`"C:\Program Files\nodejs\node.exe"`

9. `Add Arguments` needs to be set to the following:

`"C:\onePOS/LOGS/copy-olo-logs-onepos/index.js"`

### Terminating the Task Scheduler

To terminate the task, open up the Task Scheduler, select the task and `Disable` it


## License
[MIT](https://choosealicense.com/licenses/mit/)