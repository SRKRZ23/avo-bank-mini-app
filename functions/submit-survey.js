exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    // Здесь можно добавить логику для сохранения данных, например, в базе данных
    // Для примера возвращаем моковый ID заявки
    return {
      statusCode: 200,
      body: JSON.stringify({ applicationId: `app_${Math.random().toString(36).substr(2, 9)}` })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process survey' })
    };
  }
};