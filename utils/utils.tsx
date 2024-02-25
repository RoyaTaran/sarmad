const getHandler = (mainUrl: any) => {
  const get = async () => {
    try {
      const response = await fetch(
        `http://188.34.206.214:88/api/v1/${mainUrl}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("user") || ""
            )}`,
            "Content-Type": "application/json",
          },
        }
      );
      // enter you logic when the fetch is successful
      const result = await response.json();
      return result;
    } catch (error) {
      // enter your logic for when there is an error (ex. error toast)

      console.log("Err", error);
    }
  };
  localStorage.getItem("user") && get();
};

export { getHandler };
