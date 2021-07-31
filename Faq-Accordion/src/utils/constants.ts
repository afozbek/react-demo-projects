export type AccordionType = {
  id: string;
  description: string;
  headline: string;
  isOpen: boolean;
}

export const accordionList: AccordionType[] = [
  {
    id: "13131ad",
    headline: "How many team members can I invite?",
    description: `You can invite up to 2 additional users on the Free plan. There is no limit on
    team members for the Premium plan.`,
    isOpen: false
  },
  {
    id: "189471471",
    headline: "What is the maximum file upload size?",
    description: `No more than 2GB. All files in your account must fit your allotted storage space.`,
    isOpen: false
  },
  {
    id: "1o917481974",
    headline: "How do I reset my password?",
    description: `Click “Forgot password” from the login page or “Change password” from your profile page.
    A reset link will be emailed to you.`,
    isOpen: false
  },
  {
    id: "139191847141",
    headline: "Can I cancel my subscription?",
    description: `Yes! Send us a message and we’ll process your request no questions asked.`,
    isOpen: false
  },
  {
    id: "3183713131",
    headline: "Do you provide additional support?",
    description: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    isOpen: false
  }
]