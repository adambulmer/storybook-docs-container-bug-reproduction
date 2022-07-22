import { DocsContainer } from "@storybook/addon-docs";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: ({ context, children }) => {
      const { theme } = context.globals;

      console.log("Context Object Stuck", context);
      console.log("theme value stuck ---->", theme);

      return <DocsContainer context={context}>{children}</DocsContainer>;
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Brand",
    description: "Theme selector",
    defaultValue: "default_item",
    toolbar: {
      icon: "eye",
      items: [
        { value: "default_item", title: "Default Item" },
        { value: "item_two", title: "Item Two" },
      ],
      showName: true,
    },
  },
};
