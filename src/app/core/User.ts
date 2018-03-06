export class User {
	id: number;
	login: string;
	name: string;
	role: number;

	constructor(id:number, login: string, name: string, role: number) {
		this.id = id;
		this.login = login;
		this.name = name;
		this.role = role;
	}
}