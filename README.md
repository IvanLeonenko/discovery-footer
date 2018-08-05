
## Discovery React js footer component

### Run
Run `npm install`
Then `npm run start`

## Application and architecture

Application serves test page that contains footer.

Footer component is data data driven (please see `FooterData`). Footer contains simple state machine to transition between valid states.

Footer consists of:
- containers
- components
- parts (controls/molecules)

## Components
Application contains 14 UI primitives of different complexity.
### 8 UI Controls - atom/molecules
- action button
- checkbox
- email input
- text
- default title
- error
- funky text
- link
These UI controls encapsulate specific HTML CSS implementation details, providing simple React interface, exposing outside only what's expected and required.
Some of them stateless. Some of them like _email input_ or _checkbox_ have state and some logic that allow to do certain things in their area of responsibility like:
- validation
- complex UI interaction
Of course they are reusable, even relatively small _email input_ uses even simpler UI control _text_.

### Containers
There's only one container _Stack_, which allows you to arrange elements inside the stack either horizontally or vertically. Containers are stateless, needed for layout.

### Components
App has 5 components:
- app
- email form
- names form
- congrats
- footer
They mostly consist of UI controls described above.

## Next steps and comments

- There's still room to decompose components further
	- e.g. add more containers
- Save state (there're many options)
	- if signed in on the website, get state whether user signed up for newsletter
	- set cookie to identify that user has already signed up for newsletter
	- request data from server
- Fonts are served from local server, in production application should use CDN links, so users don't experience delays and / or default fonts instead of desired ones, additionally we can decrease app server load.
- Write tests