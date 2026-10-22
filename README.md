# HealthyPockets

A simple student budgeting app in white, navy, and baby blue. Built with plain HTML, CSS, and JavaScript; no build step, account setup, or API keys required.

## Test immediately in a Codespace

Pull the latest files, then run:

```bash
git pull origin main
python3 -m http.server 8000 --directory dist
```

Open the **Ports** tab, locate **8000**, and click **Open in Browser**. Keep the port private. Alternatively, download the repository and open `dist/index.html` in a browser.

Click **Try a student example** to explore sample data. Click **Start with my own numbers** to begin fresh. Your data is stored only in this browser's localStorage, for this site's origin. It does not sync between devices, the hosted preview, or Codespaces. Use **Refresh budget** to clear the plan, recurring schedules, and all logged activity from this browser.

## Features

- Hourly, weekly, or monthly take-home income, plus other monthly support.
- Editable everyday essentials and three automatically calculated savings plans: Low (10%), Moderate (20%), Aggressive (30%). Moderate is selected by default; no savings goal is required.
- Monthly plan and weekly flexible spending allowance; explicit shortfall handling.
- Actual income, expense, and savings-transfer logs, month selection, and deletion with undo.
- Monthly recurring fixed expenses and savings, with inclusive start/end months in the past or future, editing, removal with undo, and explicit recording of each occurrence.
- A 6-, 12-, or 24-month planning table compares the long-term savings totals for all three plans, alongside month-by-month totals for the selected plan and recorded activity.
- Six-month comparison of recorded income, spending, and savings.
- Responsive, keyboard-accessible forms and browser persistence.

## Calculation rules

Weekly pay is multiplied by 52/12. Hourly pay is multiplied by weekly hours and 52/12. Monthly savings are capped at income left after essentials; flexible spending never goes below zero. The app shows a shortfall if essentials exceed income. Plans are estimates and never create actual transactions automatically. Monthly cash remaining equals recorded income minus expenses minus savings transfers; it is not a bank balance. The demo uses illustrative data.

## Verify

```bash
node --test tests/logic.test.cjs
```

No bank connection, tax calculator, or financial account integration. Google Fonts is optional; system fonts remain available if it cannot load.

## Planning details

Recurring items are estimates until explicitly recorded. Set any first month in the past or future, and optionally set an inclusive last month. Scheduled savings set a minimum within the selected savings allocation rather than being added twice; all savings remain capped by available income. The timeline uses current income and everyday expense assumptions, not historical budget snapshots. Its cumulative total starts at zero in the selected range, without investment returns. Recording a scheduled item marks that occurrence to prevent recording it again; deleting its transaction makes it available again. Existing manually entered transactions cannot automatically be matched to a schedule. Do not enter the same expense as both an everyday estimate and a fixed schedule. Existing v1 browser data is preserved; prior custom savings rates are moved to the Moderate plan.
