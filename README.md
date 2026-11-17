# Kubali – Trust Deals Kenya (PWA)
Operated by BellTower Enterprise Limited, P.O. Box 142 Village Market, Nairobi 00621, Kenya · belltowerkenya@gmail.com
Static app, no server, no tracking. Deploy: push these files to a repo → Settings → Pages → Deploy from branch (root). HTTPS (required for install + hashing) is provided by GitHub Pages.
Data stays on each user's device; deals/posts are exchanged as codes via WhatsApp/SMS/email. The app never holds money.
Operator duties if you publish it: review all legal text with a Kenyan advocate; check ODPC registration needs (Data Protection Act 2019); add your contact/privacy details in index.html.

## Collecting fees (free, from GitHub)
1. Edit `config.json` with YOUR receiving channels (M-Pesa Till/Paybill/Pochi, bank, or hosted payment links from a provider such as Paystack, Flutterwave, Pesapal or PayPal.me). Public file: never add secrets.
2. Edit `custodians.json` only with partners whose licences you verified. Listing is not a guarantee.
3. Users record a payment reference per deal; reconcile with Tools → Fees ledger (CSV) and your statements.
4. Best collection: have the custodian deduct the fee at release.
