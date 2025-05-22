# Test info

- Name: Create new users
- Location: C:\Users\nipatel\Playwright\playwright-pom\tests\login.test.ts:6:5

# Error details

```
Error: page.type: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@name=\'txtLastName\']')
    - locator resolved to <input type="text" required="" maxlength="45" name="txtLastName" placeholder="eg. De Meyer" _ngcontent-ng-c2813674329="" class="form-control ng-untouched ng-pristine ng-invalid" pattern="/(?!.*\s{2,}.*)(?!^\s.*$)(?!^.*\s$)^[^<>/!?%+#$\u20ac_&@*\xa3()^\t[\]";&\\\n]+$/u"/>
  - elementHandle.type("Patel")

    at LoginPage.createUser (C:\Users\nipatel\Playwright\playwright-pom\pages\LoginPage.ts:37:21)
    at C:\Users\nipatel\Playwright\playwright-pom\tests\login.test.ts:15:9
```

# Page snapshot

```yaml
- img
- text:    
- img "FreeCharge Corporation"
- text: 
- link " Dashboard":
  - /url: /home
- link " Users":
  - /url: /useraccounts
- link " User roles":
  - /url: /roles
- link " Logs":
  - /url: /logs
- link " Support":
  - /url: /support
- link " Settings":
  - /url: /settings
- img
- text: GIN Free Charge
- banner:
  - heading "User accounts" [level=1]
  - text: Manage all user accounts. 
  - button ""
  - textbox "Search users"
  - button "Create user"
- text: 
- heading "Create user" [level=1]
- text: First name
- textbox "eg. Florence": Nimit
- text: Last name
- textbox "eg. De Meyer"
- text: Email
- textbox "Email"
- text: Phone
- combobox:
  - option "Select" [selected]
  - option "+1"
  - option "+7"
  - option "+20"
  - option "+27"
  - option "+30"
  - option "+31"
  - option "+32"
  - option "+33"
  - option "+34"
  - option "+36"
  - option "+39"
  - option "+40"
  - option "+41"
  - option "+43"
  - option "+44"
  - option "+45"
  - option "+46"
  - option "+47"
  - option "+48"
  - option "+49"
  - option "+51"
  - option "+52"
  - option "+53"
  - option "+54"
  - option "+55"
  - option "+56"
  - option "+57"
  - option "+58"
  - option "+60"
  - option "+61"
  - option "+62"
  - option "+63"
  - option "+64"
  - option "+65"
  - option "+66"
  - option "+81"
  - option "+82"
  - option "+84"
  - option "+86"
  - option "+90"
  - option "+91"
  - option "+92"
  - option "+93"
  - option "+94"
  - option "+95"
  - option "+98"
  - option "+211"
  - option "+212"
  - option "+213"
  - option "+216"
  - option "+218"
  - option "+220"
  - option "+221"
  - option "+222"
  - option "+223"
  - option "+224"
  - option "+225"
  - option "+226"
  - option "+227"
  - option "+228"
  - option "+229"
  - option "+230"
  - option "+231"
  - option "+232"
  - option "+233"
  - option "+234"
  - option "+235"
  - option "+236"
  - option "+237"
  - option "+238"
  - option "+239"
  - option "+240"
  - option "+241"
  - option "+242"
  - option "+243"
  - option "+244"
  - option "+245"
  - option "+246"
  - option "+247"
  - option "+248"
  - option "+249"
  - option "+250"
  - option "+251"
  - option "+252"
  - option "+253"
  - option "+254"
  - option "+255"
  - option "+256"
  - option "+257"
  - option "+258"
  - option "+260"
  - option "+261"
  - option "+262"
  - option "+263"
  - option "+264"
  - option "+265"
  - option "+266"
  - option "+267"
  - option "+268"
  - option "+269"
  - option "+290"
  - option "+291"
  - option "+297"
  - option "+298"
  - option "+299"
  - option "+350"
  - option "+351"
  - option "+352"
  - option "+353"
  - option "+354"
  - option "+355"
  - option "+356"
  - option "+357"
  - option "+358"
  - option "+359"
  - option "+370"
  - option "+371"
  - option "+372"
  - option "+373"
  - option "+374"
  - option "+375"
  - option "+376"
  - option "+377"
  - option "+378"
  - option "+380"
  - option "+381"
  - option "+382"
  - option "+383"
  - option "+385"
  - option "+386"
  - option "+387"
  - option "+389"
  - option "+420"
  - option "+421"
  - option "+423"
  - option "+500"
  - option "+501"
  - option "+502"
  - option "+503"
  - option "+504"
  - option "+505"
  - option "+506"
  - option "+507"
  - option "+508"
  - option "+509"
  - option "+590"
  - option "+591"
  - option "+592"
  - option "+593"
  - option "+594"
  - option "+595"
  - option "+596"
  - option "+597"
  - option "+598"
  - option "+599"
  - option "+670"
  - option "+672"
  - option "+673"
  - option "+674"
  - option "+675"
  - option "+676"
  - option "+677"
  - option "+678"
  - option "+679"
  - option "+680"
  - option "+681"
  - option "+682"
  - option "+683"
  - option "+685"
  - option "+686"
  - option "+687"
  - option "+688"
  - option "+689"
  - option "+690"
  - option "+691"
  - option "+692"
  - option "+850"
  - option "+852"
  - option "+853"
  - option "+855"
  - option "+856"
  - option "+880"
  - option "+886"
  - option "+960"
  - option "+961"
  - option "+962"
  - option "+963"
  - option "+964"
  - option "+965"
  - option "+966"
  - option "+967"
  - option "+968"
  - option "+970"
  - option "+971"
  - option "+972"
  - option "+973"
  - option "+974"
  - option "+975"
  - option "+976"
  - option "+977"
  - option "+992"
  - option "+993"
  - option "+994"
  - option "+995"
  - option "+996"
  - option "+998"
- textbox "Phone number"
- text: Assign role
- combobox "Assign role":
  - option "Template management"
  - option "manage offer - limited"
  - option "Full access (but not super admin)"
  - option "Enviso Trade Reseller Admin"
  - option "Enviso Super Admin"
  - option "Enviso Cloud Admin"
  - option "Custom-Role"
  - option "archite chscanning"
- button [disabled]
- button "Cancel"
- button "Create" [disabled]
- table:
  - rowgroup:
    - row "Name Email Status Login Modified":
      - cell
      - cell "Name"
      - cell "Email"
      - cell "Status"
      - cell "Login"
      - cell "Modified"
      - cell
  - rowgroup:
    - row "Admin User random@user.com Inactive   Yesterday":
      - cell:
        - img: AU
      - cell "Admin User"
      - cell "random@user.com"
      - cell "Inactive"
      - cell " "
      - cell "Yesterday"
      - cell
    - row "Akshita Bhuta ginenviso+akshitareseller@gmail.com Active   19/11/2024":
      - cell:
        - img: AB
      - cell "Akshita Bhuta"
      - cell "ginenviso+akshitareseller@gmail.com"
      - cell "Active"
      - cell " "
      - cell "19/11/2024"
      - cell
    - row "Ankit Delvadia ankit.delvadia+freecharge@gantnerindia.com Activation pending   Yesterday":
      - cell:
        - img: AD
      - cell "Ankit Delvadia"
      - cell "ankit.delvadia+freecharge@gantnerindia.com"
      - cell "Activation pending"
      - cell " "
      - cell "Yesterday"
      - cell
    - row "Divy Patel divy.patel+freecharge@gantnerindia.com Active   Yesterday":
      - cell:
        - img: DP
      - cell "Divy Patel"
      - cell "divy.patel+freecharge@gantnerindia.com"
      - cell "Active"
      - cell " "
      - cell "Yesterday"
      - cell
    - row "Emi H ginenviso+usetest23@gmail.com Active   27/01/2025":
      - cell:
        - img: EH
      - cell "Emi H"
      - cell "ginenviso+usetest23@gmail.com"
      - cell "Active"
      - cell " "
      - cell "27/01/2025"
      - cell
    - row "Eveline Wagenman ginenviso+reseller21@gmail.com Active   30/05/2023":
      - cell:
        - img: EW
      - cell "Eveline Wagenman"
      - cell "ginenviso+reseller21@gmail.com"
      - cell "Active"
      - cell " "
      - cell "30/05/2023"
      - cell
    - row "FreeCharge Corporation FreeCharge Corporation ginenviso+freecharge@gmail.com Active   27/01/2025":
      - cell "FreeCharge Corporation":
        - img "FreeCharge Corporation"
      - cell "FreeCharge Corporation"
      - cell "ginenviso+freecharge@gmail.com"
      - cell "Active"
      - cell " "
      - cell "27/01/2025"
      - cell
    - row "GIN Naruka ginenviso+naruka@gmail.com Active   04/11/2024":
      - cell:
        - img: GN
      - cell "GIN Naruka"
      - cell "ginenviso+naruka@gmail.com"
      - cell "Active"
      - cell " "
      - cell "04/11/2024"
      - cell
    - row "GIN Sub Free ginenviso+subfreecharge@gmail.com Active   10/12/2024":
      - cell:
        - img: GS
      - cell "GIN Sub Free"
      - cell "ginenviso+subfreecharge@gmail.com"
      - cell "Active"
      - cell " "
      - cell "10/12/2024"
      - cell
    - row "gin user ginenviso+limitedpermission@gmail.com Active   10/12/2024":
      - cell:
        - img: GU
      - cell "gin user"
      - cell "ginenviso+limitedpermission@gmail.com"
      - cell "Active"
      - cell " "
      - cell "10/12/2024"
      - cell
    - row "Hariesh Dubey ginenviso+harikesh@gmail.com Active   26/07/2024":
      - cell:
        - img: HD
      - cell "Hariesh Dubey"
      - cell "ginenviso+harikesh@gmail.com"
      - cell "Active"
      - cell " "
      - cell "26/07/2024"
      - cell
    - row "Jyot Ajani jyot.ajani+freecharge@gantnerindia.com Active   Yesterday":
      - cell:
        - img: JA
      - cell "Jyot Ajani"
      - cell "jyot.ajani+freecharge@gantnerindia.com"
      - cell "Active"
      - cell " "
      - cell "Yesterday"
      - cell
    - row "Khushi Vadhvana khushi.vadhvana+freecharge@gantnerindia.com Active   Yesterday":
      - cell:
        - img: KV
      - cell "Khushi Vadhvana"
      - cell "khushi.vadhvana+freecharge@gantnerindia.com"
      - cell "Active"
      - cell " "
      - cell "Yesterday"
      - cell
    - row "Nafees Ahmad nafees.ahmad+freecharge@gantnerindia.com Active   Yesterday":
      - cell:
        - img: NA
      - cell "Nafees Ahmad"
      - cell "nafees.ahmad+freecharge@gantnerindia.com"
      - cell "Active"
      - cell " "
      - cell "Yesterday"
      - cell
    - row "Nidhi Jha nidhi.jha+freecharge@gantnerindia.com Active   Yesterday":
      - cell:
        - img: NJ
      - cell "Nidhi Jha"
      - cell "nidhi.jha+freecharge@gantnerindia.com"
      - cell "Active"
      - cell " "
      - cell "Yesterday"
      - cell
    - row "Nimit N Patel nimit.patel+freecharge@gantner.com Inactive   17/02/2025":
      - cell:
        - img: NN
      - cell "Nimit N Patel"
      - cell "nimit.patel+freecharge@gantner.com"
      - cell "Inactive"
      - cell " "
      - cell "17/02/2025"
      - cell
    - row "Nimit Patel nimit.patel+freecharge@gantnerindia.com Activation pending   Yesterday":
      - cell:
        - img: NP
      - cell "Nimit Patel"
      - cell "nimit.patel+freecharge@gantnerindia.com"
      - cell "Activation pending"
      - cell " "
      - cell "Yesterday"
      - cell
    - row "No permission ginenviso+nopermission@gmail.com Active   11/04/2025":
      - cell:
        - img: NP
      - cell "No permission"
      - cell "ginenviso+nopermission@gmail.com"
      - cell "Active"
      - cell " "
      - cell "11/04/2025"
      - cell
    - row "Prachi Ankleshwariya prachi.ankleshwariya+freecharge@gantnerindia.com Activation pending   Yesterday":
      - cell:
        - img: PA
      - cell "Prachi Ankleshwariya"
      - cell "prachi.ankleshwariya+freecharge@gantnerindia.com"
      - cell "Activation pending"
      - cell " "
      - cell "Yesterday"
      - cell
    - row "Raj Patel raj.patel+freecharge@gantnerindia.com Active   Yesterday":
      - cell:
        - img: RP
      - cell "Raj Patel"
      - cell "raj.patel+freecharge@gantnerindia.com"
      - cell "Active"
      - cell " "
      - cell "Yesterday"
      - cell
    - row "Shery Mane ginenviso+shery@gmail.com Active   27/11/2024":
      - cell:
        - img: SM
      - cell "Shery Mane"
      - cell "ginenviso+shery@gmail.com"
      - cell "Active"
      - cell " "
      - cell "27/11/2024"
      - cell
    - row "Sofia Evans ginenviso+freechargeuser@gmail.com Active   11/11/2024":
      - cell:
        - img: SE
      - cell "Sofia Evans"
      - cell "ginenviso+freechargeuser@gmail.com"
      - cell "Active"
      - cell " "
      - cell "11/11/2024"
      - cell
    - row "Template Manager ginenviso+freecharge_template@gmail.com Active   08/04/2024":
      - cell:
        - img: TM
      - cell "Template Manager"
      - cell "ginenviso+freecharge_template@gmail.com"
      - cell "Active"
      - cell " "
      - cell "08/04/2024"
      - cell
    - row "Test user ginenviso+user55@gmail.com Active   21/07/2023":
      - cell:
        - img: TU
      - cell "Test user"
      - cell "ginenviso+user55@gmail.com"
      - cell "Active"
      - cell " "
      - cell "21/07/2023"
      - cell
    - row "Vijay Ghatala vijay.ghatala+freecharge@gantnerindia.com Activation pending   Yesterday":
      - cell:
        - img: VG
      - cell "Vijay Ghatala"
      - cell "vijay.ghatala+freecharge@gantnerindia.com"
      - cell "Activation pending"
      - cell " "
      - cell "Yesterday"
      - cell
- img
- paragraph: "End of life: System VAT rates"
- paragraph: Feb 7th 25
- link "View latest updates":
  - /url: https://gantner-com.statuspal.eu/info_notices/185647
- button:
  - img
```

# Test source

```ts
   1 | import { Page } from '@playwright/test';
   2 |
   3 | export class LoginPage {
   4 |   readonly page: Page;
   5 |
   6 |   constructor(page: Page) {
   7 |     this.page = page;
   8 |   }
   9 |
  10 |   private Elements = {
  11 |     loginUser: "//input[@id='loginId']",
  12 |     nextBtnUser: "//button[@id='next-button']",
  13 |     loginPass: "//input[@id='password']",
  14 |     loginBtn: "//button[contains(text(), 'Log in')]",
  15 |     createBtn: "//button[contains(text(), 'Create user')]",
  16 |     fName: "//input[@name='txtFirstName']",
  17 |     lname: "//input[@name='txtLastName']",
  18 |     email: "//input[@name='txtEmail']",
  19 |     roleDrp: "//select[@name='drpRole']",
  20 |     valueDrop: "//option[contains(text(), 'Full access')]",
  21 |     hoverSection: "//i[@class='icons8-double-right pin-icon']",
  22 |     userMenu: "//div[contains(text(), 'Users')]",
  23 |     cancelBtn: "//button[contains(text(), 'Cancel')]"
  24 | }
  25 |
  26 | async navigateToEnvisoLoginPage() {
  27 |     await this.page.goto("https://cloud.test-enviso.io/login");
  28 |     await this.page.waitForTimeout(5000);
  29 |     
  30 | }
  31 |
  32 | async createUser(firstname: string, lastname: string, email: string) {
  33 |     
  34 |     
  35 |     await this.page.click(this.Elements.createBtn);
  36 |     await this.page.type(this.Elements.fName, firstname);
> 37 |     await this.page.type(this.Elements.lname, lastname);
     |                     ^ Error: page.type: Test timeout of 30000ms exceeded.
  38 |     await this.page.type(this.Elements.email, email);
  39 |
  40 |    await this.page.locator(this.Elements.roleDrp).selectOption({ label: 'Full access (but not super admin)' });
  41 |    //await this.page.waitForTimeout(2000);
  42 |    await this.page.click(this.Elements.cancelBtn);
  43 |    // await this.page.locator(this.Elements.roleDrp).selectOption({ index: 2 });
  44 |
  45 | }
  46 |
  47 | async userLogin(email: string, password: string){
  48 |     await this.page.type(this.Elements.loginUser, email);
  49 |
  50 |     await this.page.click(this.Elements.nextBtnUser);
  51 |
  52 |     await this.page.type(this.Elements.loginPass, password);
  53 |
  54 |     await this.page.click(this.Elements.loginBtn);
  55 |
  56 |     await this.page.click(this.Elements.hoverSection);
  57 |     await this.page.click(this.Elements.userMenu);
  58 | }
  59 |
  60 | //   async navigate() {
  61 | //     await this.page.goto('/login');
  62 | //   }
  63 |
  64 | //   async enterUsername(username: string) {
  65 | //     await this.page.fill('input[name="username"]', username);
  66 | //   }
  67 |
  68 | //   async enterPassword(password: string) {
  69 | //     await this.page.fill('input[name="password"]', password);
  70 | //   }
  71 |
  72 | //   async clickLogin() {
  73 | //     await this.page.click('button[type="submit"]');
  74 | //   }
  75 |
  76 | //   async login(username: string, password: string) {
  77 | //     await this.enterUsername(username);
  78 | //     await this.enterPassword(password);
  79 | //     await this.clickLogin();
  80 | //   }
  81 | }
  82 |
```