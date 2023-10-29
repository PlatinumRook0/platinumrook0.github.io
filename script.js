console.log(`
.od88888bo.
88888888888R             
888P'  'T888  8b      .d8888b.  d8888b  88  d88b    8b  d8      8b  d88b       d88b
888n.  .d888  88      88    88    88    88  88P88   88  88      88  88P88     88P88   d88   .d88b.  .d88b.  8  d
88800000088P  88      88888888    88    88  88  88  88  88      88  88  88   88  88   8  8  8    8  8    8  8oR
888888888P"   8L      8A    88    T8    I8  88   N8d88  88b    U88  88   88M88   88   88R   8    O  8    O  8T K
888P          88888b  88    88    88    88  Y8    Y88P   *Y8888P*   Y8    Y8P    8P   8  D  'T88T'  'T88T'  8   V
888
888
888
88Y

i see you.
`);


async function getJson(linkPath) {
    try {
      const response = await fetch(linkPath);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Failed to fetch JSON.");
      }
    } catch (error) {
      console.error('Error:', error);
      return null; // or any other error handling logic
    }
  }
  
  async function fetchData() {
    try {
      const returnedData = await getJson("https://platinum-rook.github.io/Button%20links.json");
      console.log(returnedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();
  