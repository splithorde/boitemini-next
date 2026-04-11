import { SiFacebook, SiTwitter } from '@icons-pack/react-simple-icons';
# Footer Component Specification

## Overview
The Footer component provides global navigation, company branding, and social media presence at the bottom of every page.

## Components
- **Brand**: Displays 'BoiteMini' in bold uppercase with tracking-widest spacing.
- **Social Links**: Contains clickable icons for SiFacebook and SiTwitter.
- **Copyright**: Displays the current year and service description.
- **Navigation**: Links to 'Mentions Légales' and 'Contact'.

## Social Media Links
- **SiFacebook**: [Link](https://www.facebook.com/pages/BoiteMini/244972728897536)
- **SiTwitter**: [Link](https://twitter.com/BoiteMini)

### Constraints
- **External Links**: Must use `target="_blank"` and `rel="noopener noreferrer"` for security.
- **Icons**: Uses `lucide-react` (SiFacebook, SiTwitter) at size 24px.
- **Interactions**: Hover states switch text color from `zinc-400` to `white` with smooth transitions.
