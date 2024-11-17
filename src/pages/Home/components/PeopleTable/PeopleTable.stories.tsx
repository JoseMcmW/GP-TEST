import type { Meta, StoryObj } from "@storybook/react"
import PeopleTable from "./PeopleTable"

const meta = {
    title: 'PeopleTable',
    component: PeopleTable,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof PeopleTable>;

export default meta;

type Story = StoryObj<typeof PeopleTable>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
