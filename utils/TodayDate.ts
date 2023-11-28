const date = new Date();

const options: Record<string, any> = {
  month: "long",
  day: "numeric",
  year: "numeric",
};

export const todayDate = date.toLocaleString("en-US", options);
