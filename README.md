# HealthyPockets

A simple student budgeting app in white, navy, and baby blue. Built with plain HTML, CSS, and JavaScript; no build step, account setup, or API keys required.

## Test immediately in a Codespace

Pull the latest files, then run:

```bash
git pull origin main
python3 -m http.server 8000 --directory dist
```

Open the **Ports** tab, locate **8000**, and click **Open in Browser**. Keep the port private. Alternatively, download the repository and open `dist/index.html` in a browser.

Click **Try a student example** to explore sample data. Click **Start with my own numbers** to begin fresh. Your data is stored only in this browser's localStorage, for this site's origin. It does not sync between devices, the hosted preview, or Codespaces. Clearing browser storage removes it.

## Features

- Hourly, weekly, or monthly take-home income, plus other monthly support.
- Editable everyday essentials and three side-by-side savings targets: Low (10%), Moderate (20%), Aggressive (30%).
- Monthly plan and weekly flexible spending allowance; explicit shortfall handling.
- Actual income, expense, and savings-transfer logs, month selection, and deletion with undo.
- Monthly recurring fixed expenses and savings, with inclusive start/end months, editing, removal with undo, and explicit recording of each occurrence.
- A 6-, 12-, or 24-month planning table compares plans with recorded totals and cumulative planned savings.
- Six-month comparison of recorded income, spending, and savings.
- Savings goal with starting balance, recorded contributions, and estimated timeline.
- Responsive, keyboard-accessible forms and browser persistence.

## Calculation rules

Weekly pay is multiplied by 52/12. Hourly pay is multiplied by weekly hours and 52/12. Monthly savings are capped at income left after essentials; flexible spending never goes below zero. The app shows a shortfall if essentials exceed income. Plans are estimates and never create actual transactions automatically. Monthly cash remaining equals recorded income minus expenses minus savings transfers; it is not a bank balance. Goal progress counts starting savings plus all recorded savings transfers; only record new transfers after the starting balance. Goal forecasts assume the current monthly saving allocation continues, without investment returns. The demo uses illustrative data.

## Verify

```bash
node --test tests/logic.test.cjs
```

No bank connection, tax calculator, or financial account integration. Google Fonts is optional; system fonts remain available if it cannot load.

## Planning details

Recurring items are estimates until explicitly recorded. Scheduled savings set a minimum within the selected savings allocation rather than being added twice; all savings remain capped by available income. Schedules apply in both past and future months. The timeline uses current income and everyday expense assumptions, not historical budget snapshots. Its cumulative total starts at zero in the selected range, without investment returns. Recording a scheduled item marks that occurrence to prevent recording it again; deleting its transaction makes it available again. Existing manually entered transactions cannot automatically be matched to a schedule. Do not enter the same expense as both an everyday estimate and a fixed schedule. Existing v1 browser data is preserved, including custom savings rates until a new option is selected.
