export abstract class PersonRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}
