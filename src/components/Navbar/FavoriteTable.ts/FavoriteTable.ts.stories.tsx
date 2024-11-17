import type { Meta, StoryObj } from "@storybook/react"
import FavoriteTable.ts from "./FavoriteTable.ts"

const meta = {
    title: 'FavoriteTable.ts',
    component: FavoriteTable.ts,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof FavoriteTable.ts>;

export default meta;

type Story = StoryObj<typeof FavoriteTable.ts>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
