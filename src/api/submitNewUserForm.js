export default async function () {
  return await new Promise((res) => {
    setTimeout(() => {
      res({
        status: 'success',
      });
    }, 2000);
  });
}
