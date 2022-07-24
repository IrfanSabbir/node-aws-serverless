

async function createAuction(event, context) {

  const { title } = JSON.parse(event.body);

  const currentDate =  new Date();
  const auction = {
    title,
    status: 'OPEN',
    createdAt: currentDate.toISOString()
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ auction, event }),
  };
}

export const handler = createAuction;


