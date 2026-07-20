import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.HEAD || process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "project",
        label: "Projects",
        path: "src/content/projects",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) =>
              (values?.title || "project")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, ""),
          },
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "year", label: "Year", required: true,
            description: "Used to group projects on the CV, e.g. 2026" },
          { type: "string", name: "venue", label: "Venue / Context",
            description: "Shown after the title on the CV, e.g. 'Gallery Name, City'" },
          { type: "number", name: "order", label: "Order within year",
            description: "Lower numbers appear first. Optional." },
          { type: "image", name: "mainImage", label: "Main image", required: true,
            description: "Shown as the background when hovering this project on the CV" },
          { type: "image", name: "backgroundImage", label: "Project page background (optional)",
            description: "Background shown behind the card on this project's own page. Falls back to the main image if empty." },
          {
            type: "object", name: "gallery", label: "Gallery", list: true,
            ui: { itemProps: (item) => ({ label: item?.caption || "Image" }) },
            fields: [
              { type: "image", name: "image", label: "Image", required: true },
              { type: "string", name: "caption", label: "Caption" },
            ],
          },
          { type: "rich-text", name: "body", label: "Description", isBody: true },
        ],
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "src/data",
        format: "json",
        match: { include: "settings" },
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: "string", name: "name", label: "Your name", required: true },
          { type: "string", name: "subtitle", label: "Subtitle", description: "e.g. Curriculum Vitae" },
          { type: "string", name: "bio", label: "Bio paragraphs", list: true,
            ui: { component: "list" } },
          { type: "string", name: "email", label: "Email address" },
          { type: "string", name: "portfolioUrl", label: "Portfolio link (optional)" },
          { type: "string", name: "instagramUrl", label: "Instagram link" },
          {
            type: "object", name: "colors", label: "Colors",
            fields: [
              { type: "string", name: "background", label: "Background color", ui: { component: "color" } },
              { type: "string", name: "card", label: "Card color", ui: { component: "color" } },
              { type: "string", name: "ink", label: "Text color", ui: { component: "color" } },
            ],
          },
          { type: "string", name: "patternWord", label: "Background pattern word",
            description: "Word repeated in the tiled background stickers" },
          { type: "image", name: "patternImage", label: "Background pattern image (optional)",
            description: "If set, this image is tiled instead of the word stickers" },
          {
            type: "object", name: "education", label: "Education", list: true,
            ui: { itemProps: (item) => ({ label: item?.text || "Entry" }) },
            fields: [
              { type: "string", name: "years", label: "Years" },
              { type: "string", name: "text", label: "Text" },
            ],
          },
          {
            type: "object", name: "awards", label: "Selected Awards", list: true,
            ui: { itemProps: (item) => ({ label: item?.text || "Entry" }) },
            fields: [
              { type: "string", name: "year", label: "Year" },
              { type: "string", name: "text", label: "Text" },
            ],
          },
          { type: "string", name: "footer", label: "Footer lines", list: true },
        ],
      },
    ],
  },
});
