export default class NotFound extends Error {
  constructor(field: string) {
    super(`${field} not found`);
    this.name = `${field} not found`;
    this.description = 'Not found';
  }
  public description: string;
}
