/**
 * IntegrateWise Brand Data — Single Source of Truth
 * 
 * This file contains ALL canonical brand copy, messaging, colors, and approved variants.
 * All components, pages, n8n workflows, and external systems import from this file.
 * 
 * Last updated: March 27, 2026
 */

// ═══════════════════════════════════════════════════════════
// BRAND COLORS (Canonical)
// ═══════════════════════════════════════════════════════════

export const BRAND_COLORS = {
  // Primary brand colors
  primary: '#4356A9',
  primaryDark: '#232D42',
  primaryLight: '#55608C',
  
  // Accent colors
  accent: '#EB4F72',
  accentDark: '#D9637F',
  accentLight: '#F5DFEC',
  
  // Enterprise Navy scale
  navy: {
    900: '#1D1E21',
    800: '#232D42',
    700: '#333944',
    600: '#55608C',
    500: '#636A82',
    400: '#888CA9',
    300: '#A4A9BE',
    200: '#D399A1',
  },
  
  // Neutrals
  gray: {
    bg: '#EDF0F5',
    50: '#F2F3F4',
    100: '#EDEEF0',
    200: '#E5E8F4',
    300: '#BCC3D4',
    400: '#A4A9BE',
    500: '#888CA9',
    600: '#636A82',
    700: '#55608C',
    800: '#333944',
    900: '#1D1E21',
  },
  
  // Semantic colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
} as const;

// ═══════════════════════════════════════════════════════════
// CANONICAL MESSAGING
// ═══════════════════════════════════════════════════════════

export const BRAND_MESSAGING = {
  // Primary product descriptor
  productDescriptor: 'The Knowledge Workspace empowered by AI and the Spine',
  
  // Primary tagline
  primaryTagline: 'AI Thinks in Context — and Waits for Approval',
  
  // Short taglines
  taglineShort: 'Context-Aware AI. Approval-Controlled Work.',
  taglineVeryShort: 'AI Knowledge Workspace',
  
  // Product essence (for marketing, decks, company docs)
  productEssence: 'IntegrateWise is a knowledge workspace where the Spine becomes the single source of truth and AI operates on top of that context — thinking, proposing, and learning while every action remains under human approval.',
  
  // Spine explanation variants (use consistently)
  spine: {
    short: 'The Spine (SSOT)',
    medium: 'The Spine — Unified Intelligence Layer',
    long: 'The Spine — Single Source of Truth and Unified Intelligence Layer',
  },
} as const;

// ═══════════════════════════════════════════════════════════
// ASSET-SPECIFIC COPY
// ═══════════════════════════════════════════════════════════

export const ASSET_COPY = {
  letterhead: 'IntegrateWise LLP · The Knowledge Workspace empowered by AI and the Spine',
  invoiceFooter: 'IntegrateWise — AI Thinks in Context and Works Through Approvals',
  businessCard: 'The Knowledge Workspace empowered by AI and the Spine',
  profileHeadline: 'The Knowledge Workspace Where AI Thinks in Context',
  brochureHeadline: 'Bring Work, Knowledge, and Decisions Together Through the Spine',
  marketingHeadline: 'Work Becomes Smarter When AI Understands Context',
} as const;

// ═══════════════════════════════════════════════════════════
// PRODUCT ARCHITECTURE PILLARS
// ═══════════════════════════════════════════════════════════

export const PRODUCT_PILLARS = [
  {
    title: 'The Spine (SSOT)',
    description: 'Single Source of Truth — the unified intelligence layer connecting tools, context, and decisions across the workspace.',
  },
  {
    title: 'AI Context Engine',
    description: 'AI operates on top of the Spine context — thinking, proposing, and learning while every action remains under human approval.',
  },
  {
    title: 'Approval Governance',
    description: 'Every AI-initiated action passes through human-controlled checkpoints. Nothing executes without explicit approval.',
  },
  {
    title: 'Workspace Layers',
    description: 'Structured layers for knowledge management, task orchestration, and cross-tool integration within a single platform.',
  },
] as const;

// ═══════════════════════════════════════════════════════════
// VALUE PROPOSITIONS BY ROLE
// ═══════════════════════════════════════════════════════════

export const VALUE_PROPS_BY_ROLE = {
  cto: 'Unified intelligence layer connecting all your tools — no more siloed data or integration chaos.',
  cfo: 'Complete visibility and approval control over every AI action — audit-ready governance built in.',
  coo: 'Every operational decision grounded in the Spine — AI proposes, humans approve, nothing slips through.',
  vp_sales: 'All customer context in one place — AI drafts proposals, you approve, deals close faster.',
  vp_cs: 'Complete account health view — AI flags risks, proposes actions, you stay in control.',
  product_manager: 'Single source of truth for all product decisions — AI connects the dots across tools and teams.',
} as const;

// ═══════════════════════════════════════════════════════════
// CONTACT INFORMATION
// ═══════════════════════════════════════════════════════════

export const CONTACT = {
  general: ['info@integratewise.co', 'connect@integratewise.co'],
  sales: ['sales@integratewise.co', 'sales@integratewise.ai'],
  support: ['support@integratewise.co', 'support@integratewise.ai'],
  billing: ['billing@integratewise.co', 'billing@integratewise.ai'],
  marketing: 'marketing@integratewise.co',
  careers: 'careers@integratewise.co',
  security: 'security@integratewise.co',
  website: 'integratewise.ai',
} as const;

// ═══════════════════════════════════════════════════════════
// USAGE GUIDELINES
// ═══════════════════════════════════════════════════════════

export const USAGE_GUIDELINES = {
  dos: [
    'Use the full logo on light backgrounds',
    'Maintain minimum clear space (height of one icon node)',
    'Use icon-only variant for small spaces (< 32px)',
    'Use monochrome white version on dark backgrounds',
    'Print: minimum 25mm width. Digital: minimum 120px width',
    'Scale proportionally — never stretch',
  ],
  donts: [
    'Alter the logo colors outside brand palette',
    'Add effects like drop shadows or outlines',
    'Place the logo on busy or low-contrast backgrounds',
    'Rotate or skew the logo in any direction',
    'Use full-color logo on dark backgrounds',
    'Use coral/pink heavily in formal documents (seal, invoice)',
  ],
} as const;

// ═══════════════════════════════════════════════════════════
// DESIGN STYLE
// ═══════════════════════════════════════════════════════════

export const DESIGN_STYLE = {
  aesthetic: 'Enterprise Minimal + Intelligent Systems Aesthetic',
  principles: [
    { feel: 'Trusted enterprise platform', not: 'Not flashy startup graphics' },
    { feel: 'Modern SaaS product', not: 'Not old-fashioned corporate stationery' },
    { feel: 'Structured intelligence system', not: 'Not crowded marketing layouts' },
    { feel: 'Human-governed AI', not: 'Not generic tech templates' },
  ],
} as const;

// ═══════════════════════════════════════════════════════════
// BRAND MOTIFS
// ═══════════════════════════════════════════════════════════

export const BRAND_MOTIFS = [
  {
    name: 'Spine Node Line',
    description: 'Connected circles and lines inspired by the logo symbol. Used for backgrounds and decorative elements.',
  },
  {
    name: 'Approval Checkpoint',
    description: 'Small rounded rectangle or node used as a visual approval stage marker.',
  },
  {
    name: 'Context Card',
    description: 'Soft-edged box representing structured knowledge/context blocks.',
  },
  {
    name: 'Layer Bands',
    description: 'Subtle layered strips suggesting workspace, intelligence, and governance layers.',
  },
] as const;

// ═══════════════════════════════════════════════════════════
// EXPORT HELPERS
// ═══════════════════════════════════════════════════════════

/**
 * Get the canonical tagline for a given context
 */
export function getTagline(context: 'primary' | 'short' | 'very-short' = 'primary'): string {
  switch (context) {
    case 'primary':
      return BRAND_MESSAGING.primaryTagline;
    case 'short':
      return BRAND_MESSAGING.taglineShort;
    case 'very-short':
      return BRAND_MESSAGING.taglineVeryShort;
    default:
      return BRAND_MESSAGING.primaryTagline;
  }
}

/**
 * Get asset-specific copy
 */
export function getAssetCopy(asset: keyof typeof ASSET_COPY): string {
  return ASSET_COPY[asset];
}

/**
 * Get value prop for a specific role
 */
export function getValuePropForRole(role: keyof typeof VALUE_PROPS_BY_ROLE): string {
  return VALUE_PROPS_BY_ROLE[role];
}
