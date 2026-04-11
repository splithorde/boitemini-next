# CONTACT_PAGE_SPEC

## Static Display Requirements
The contact page must display specific information as non-interactive static text to comply with business rules.

### Required Information
- **Physical Address**: BoiteMini 25bis Rue Georges Bizet 92000 Nanterre
- **Phone Number**: +33 6 73 12 26 85
- **Email**: contact@boitemini.fr

### Technical Constraints
- The email address must NOT be wrapped in an anchor tag (`<a>`).
- The email address must NOT use the `mailto:` protocol.
- The email address must be rendered as plain text (e.g., within a `<span>` or `<p>`) to prevent interactive browser behaviors.