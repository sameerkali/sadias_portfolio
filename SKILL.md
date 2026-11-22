---
name: design-system-motion-prev-framer-motion-javascript-react-anima
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Motion (prev Framer Motion): JavaScript & React animation library

## Mission
Deliver implementation-ready design-system guidance for Motion (prev Framer Motion): JavaScript & React animation library that can be applied consistently across e-commerce storefront interfaces.

## Brand
- Product/brand: Motion (prev Framer Motion): JavaScript & React animation library
- URL: https://motion.dev/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=TASA Orbiter`, `font.family.stack=TASA Orbiter, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=normal`
- Typography scale: `font.size.xs=11px`, `font.size.sm=12px`, `font.size.md=13px`, `font.size.lg=15px`, `font.size.xl=16px`, `font.size.2xl=20px`, `font.size.3xl=30px`, `font.size.4xl=34px`
- Color palette: `color.text.primary=oklch(0.94 0.008 96)`, `color.text.secondary=oklch(0.69 0.012 148)`, `color.text.tertiary=#1a1a1c`, `color.text.inverse=#6e6a64`, `color.surface.base=#000000`, `color.surface.muted=#080808`, `color.surface.raised=#141214`, `color.surface.strong=oklch(0.88 0.18 96)`
- Spacing scale: `space.1=3px`, `space.2=5px`, `space.3=8px`, `space.4=9px`, `space.5=10px`, `space.6=12px`, `space.7=18px`, `space.8=24px`
- Radius/shadow/motion tokens: `radius.xs=3px`, `radius.sm=50px` | `motion.duration.instant=140ms`, `motion.duration.fast=150ms`, `motion.duration.normal=160ms`, `motion.duration.slow=180ms`, `motion.duration.slower=200ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
