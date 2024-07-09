import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Заявки',
	description: 'Страница заявок',
};

export default function Profile() {
	return (
		<table>
			<thead>
				<tr>
					<td>ID статус</td>
					<td>Изменено</td>
					<td>Электронная почта (для уведомлении о создании заявки) </td>
					<td>Дата и время обнаружения неисправности/проблемы </td>
					<td>Действия, которые при этом выполнялись с системой </td>
					<td>Описание неисправности / проблемы </td>
					<td>Важность для заказчика и желательный срок устранения </td>
					<td>Время реакции </td>
					<td>Назначенный исполнитель </td>
					<td>Комментарии</td>
					<td>Обсуждение</td>
				</tr>
			</thead>
			<tbody></tbody>
			<tfoot></tfoot>
		</table>
	);
}
