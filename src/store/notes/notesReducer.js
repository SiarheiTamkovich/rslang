const initialState = [
  {id: 0, isCompleted: false, title: 'Главная страница приложения +40'},
  {id: 1, isCompleted: false, title: 'Авторизация +40'},
  {id: 2, isCompleted: false, title: 'Электронный учебник +80'},
  {id: 3, isCompleted: false, title: 'Список слов +80'},
  {id: 4, isCompleted: false, title: `Мини-игра "Аудиовызов" +100`},
  {id: 5, isCompleted: false, title: `Мини-игра "Спринт" +100`},
  {id: 6, isCompleted: false, title: 'Прогресс изучения +40'},
  {id: 7, isCompleted: false, title: 'Изученные слова +40'},
  {id: 8, isCompleted: false, title: 'Страница статистики +40'},
];

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTES':
      return [
        ...state,
        {
          id: action.id,
          isCompleted: false,
          title: action.text,
        }
      ]
    case 'TOGGLE_NOTES':
      return state.map(item =>
        (item.id === action.id) ? 
        {...item, isCompleted: !item.isCompleted} : item,
      );
    case 'EDIT_NOTES':
      return state.filter(item =>
        (item.id !== action.id) 
      );
      case 'DELATE_NOTES':
        return state.filter(item =>
          (item.id !== action.id) 
        );
      case `LOAD_NOTES`:
        action.payload.map((item) => {
          item.id = Math.floor(Math.random()*(1000-100+1)+100);
          item.isCompleted = item.completed;
          item.title = `id=${item.id}, ${item.title}, ${item.isCompleted}`;
          delete item.completed;
          delete item.userId;
          return state;
        });
        return  [...state, ...action.payload]
    default:
      return state;
  }
};