

async function fetchApodData() {
    try {
      const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=azrcPSop2fVRo8dUmVX7uwbWHAL2Qdu0xybgtiM7");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching APOD data: ", error);
      throw error;
    }
  }



// Test the fetching function
test('fetches Astronomy Picture of the Day data', async () => {
    // Mock fetch to return mock data
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            copyright: "Yuri Beletsky",
    date: "2024-05-04",
    explanation: "Despite their resemblance to R2D2, these three are not the droids you're looking for. Instead, the enclosures house 1.8 meter Auxiliary Telescopes (ATs) at Paranal Observatory in the Atacama Desert region of Chile. The ATs are designed to be used for interferometry, a technique for achieving extremely high resolution observations, in concert with the observatory's 8 meter Very Large Telescope units. A total of four ATs are operational, each fitted with a transporter that moves the telescope along a track allowing different arrays with the large unit telescopes. To work as an interferometer, the light from each telescope is brought to a common focal point by a system of mirrors in underground tunnels. Above these three ATs, the Large and Small Magellanic Clouds are the far, far away satellite galaxies of our own Milky Way. In the clear and otherwise dark southern skies, planet Earth's greenish atmospheric airglow stretches faintly along the horizon.",
    hdurl: "https://apod.nasa.gov/apod/image/2405/three_ats_beletsky.jpg",
    media_type: "image",
    service_version: "v1",
    title: "3 ATs",
    url: "https://apod.nasa.gov/apod/image/2405/three_ats_beletsky.jpg" 
          }),
      })
    );
  
    // Call the fetching function
    const apodData = await fetchApodData();
  
    // Assert that the data is correct
    expect(apodData.copyright).toBe("Yuri Beletsky");
  
  });