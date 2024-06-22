/**
 * Get cute dog pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */
export const getDogs = async (length = 10) => {
  const response = await fetch(
    `https://img.cdn4dd.com/s/managed/interview/tps-dogs/api.json`,
  );
  let data = {
    data: {
      children: [
        {
          data: {
            title: "I don't want to work today, let's go home",
            preview: {
              images: [
                {
                  resolutions: [
                    {},
                    {},
                    {
                      url: "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog1.jpeg",
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          data: {
            title:
              "Toronto service dog helps ROM staff member and looks adorable doing it",
            preview: {
              images: [
                {
                  resolutions: [
                    {},
                    {},
                    {
                      url: "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog2.jpeg",
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          data: {
            title:
              "Service dog in training on his first outing around trains! Looking forward to seeing this bit to great things for his person",
            preview: {
              images: [
                {
                  resolutions: [
                    {},
                    {},
                    {
                      url: "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog3.jpeg",
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          data: {
            title: "WW2 photograph of a company mascot dog",
            preview: {
              images: [
                {
                  resolutions: [
                    {},
                    {},
                    {
                      url: "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog4.jpeg",
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          data: {
            title:
              "Charlotte is fully grown so is able to get her final working harness and gear! She is absolutely loving showing off her spiffy new outfit to all her friends and family",
            preview: {
              images: [
                {
                  resolutions: [
                    {},
                    {},
                    {
                      url: "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog5.jpeg",
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          data: {
            title: "This is my new Urban Search and Rescue puppy. Ares.",
            preview: {
              images: [
                {
                  resolutions: [
                    {},
                    {},
                    {
                      url: "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog6.jpeg",
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          data: {
            title:
              "Kruger and Sorra waiting to catch the bus after a training meet up! Sorra (shepherd ) does medical alert and Kruger(st bernard x lab) is training for psych and mobility. It was lovely to get the opportunity to meet other handlers again!",
            preview: {
              images: [
                {
                  resolutions: [
                    {},
                    {},
                    {
                      url: "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog7.jpeg",
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          data: {
            title: "Beekeeping dog helps owners deliver honey",
            preview: {
              images: [
                {
                  resolutions: [
                    {},
                    {},
                    {
                      url: "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog8.jpeg",
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          data: {
            title: "He's a rescue dog trainee (azubi in German)",
            preview: {
              images: [
                {
                  resolutions: [
                    {},
                    {},
                    {
                      url: "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog9.jpeg",
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          data: {
            title: "Hendrix on his way to gather sheep",
            preview: {
              images: [
                {
                  resolutions: [
                    {},
                    {},
                    {
                      url: "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog10.jpeg",
                    },
                  ],
                },
              ],
            },
          },
        },
      ],
    },
  };
  let dogs = [];

  data.data.children.forEach((c) => {
    const title = c.data.title;
    const url = c.data.preview?.images[0]?.resolutions[2]?.url;
    if (url) {
      dogs.push({ title: title, url: url.replaceAll("&amp;", "&") });
    }
  });

  // .then((response) => response.json())
  // .then((response) => {
  //   const dogs = [];
  //   response.data.children.forEach((c) => {
  //     const title = c.data.title;
  //     const url = c.data.preview?.images[0]?.resolutions[2]?.url;
  //     if (url) {
  //       dogs.push({ title: title, url: url.replaceAll("&amp;", "&") });
  //     }
  //   });
  return dogs.slice(0, length); // remove the extra dogs
  // });
};
