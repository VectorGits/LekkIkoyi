### Project Structure
* [.eslintrc.json](./.eslintrc.json): Configuration file for ESLint, a tool for identifying and fixing linting issues in your code.
* [.gitignore](./.gitignore): Specifies files and directories that should be ignored by Git.
* [.next/](./.next/): Build output directory for Next.js. This is generated automatically and should not be modified manually.
* [app](./app/): Contains the main application pages and components.
  * [admin/](./app/admin/): Admin-related pages and components.
  * [auth/](./app/auth/): Authentication-related pages and components.
  * [contact/](./app/contact/): Contact-related pages and components.
  * [details/](./app/details/): Detail-related pages and components.
  * [fonts/](./app/fonts/): Custom fonts used in the application.
  * [globals.css](./app/globals.css): Global CSS styles for the application.
  * [layout.tsx](./app/layout.tsx): Layout component for the application.
  * [page.tsx](./app/page.tsx): Main page component.
* [components](./components/): Reusable components used throughout the application.
  * [Form.tsx](./components/Form.tsx): Form component.
  * [Helper/](./components/Helper/): Helper components.
  * [Home/](./components/Home/): Home page components.
* [constant](./constant/): Contains constants used in the application.
  * [Constant.ts](./constant/Constant.ts): File containing constant values.
* [context](./context/): Context providers for managing global state.
  * [AuthContext.tsx](./context/AuthContext.tsx): Authentication context provider.
* [Data](./Data/): Contains data-related files.
  * [data.ts](./Data/data.ts): Data file.
* [firebaseConfig.ts](./firebaseConfig.ts): Configuration file for Firebase.
* [next-env.d.ts](./next-env.d.ts): TypeScript declaration file for Next.js.
* [next.config.mjs](./next.config.mjs): Configuration file for Next.js.
* [package.json](./package.json): Contains project metadata and dependencies.
* [postcss.config.mjs](./postcss.config.mjs): Configuration file for PostCSS.
* [public](./public/): Public assets such as images and fonts.
* [README.md](./README.md): Project documentation.
* [tailwind.config.ts](./tailwind.config.ts): Configuration file for Tailwind CSS.
* [tsconfig.json](./tsconfig.json): TypeScript configuration file.
* [types](./types/): Contains TypeScript type definitions.