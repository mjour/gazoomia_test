// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenID", Value.fromBigInt(BigInt.zero()));
    this.set("contentURI", Value.fromString(""));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("collection", Value.fromString(""));
    this.set("creator", Value.fromString(""));
    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get contentURI(): string {
    let value = this.get("contentURI");
    return value!.toString();
  }

  set contentURI(value: string) {
    this.set("contentURI", Value.fromString(value));
  }

  get imageURI(): string | null {
    let value = this.get("imageURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set imageURI(value: string | null) {
    if (!value) {
      this.unset("imageURI");
    } else {
      this.set("imageURI", Value.fromString(<string>value));
    }
  }

  get baseURI(): string | null {
    let value = this.get("baseURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set baseURI(value: string | null) {
    if (!value) {
      this.unset("baseURI");
    } else {
      this.set("baseURI", Value.fromString(<string>value));
    }
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get updatedAtTimestamp(): BigInt | null {
    let value = this.get("updatedAtTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set updatedAtTimestamp(value: BigInt | null) {
    if (!value) {
      this.unset("updatedAtTimestamp");
    } else {
      this.set("updatedAtTimestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get collection(): string {
    let value = this.get("collection");
    return value!.toString();
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get eyes(): string | null {
    let value = this.get("eyes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set eyes(value: string | null) {
    if (!value) {
      this.unset("eyes");
    } else {
      this.set("eyes", Value.fromString(<string>value));
    }
  }

  get background(): string | null {
    let value = this.get("background");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set background(value: string | null) {
    if (!value) {
      this.unset("background");
    } else {
      this.set("background", Value.fromString(<string>value));
    }
  }

  get hat(): string | null {
    let value = this.get("hat");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set hat(value: string | null) {
    if (!value) {
      this.unset("hat");
    } else {
      this.set("hat", Value.fromString(<string>value));
    }
  }

  get mouth(): string | null {
    let value = this.get("mouth");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set mouth(value: string | null) {
    if (!value) {
      this.unset("mouth");
    } else {
      this.set("mouth", Value.fromString(<string>value));
    }
  }

  get clothes(): string | null {
    let value = this.get("clothes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set clothes(value: string | null) {
    if (!value) {
      this.unset("clothes");
    } else {
      this.set("clothes", Value.fromString(<string>value));
    }
  }

  get fur(): string | null {
    let value = this.get("fur");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fur(value: string | null) {
    if (!value) {
      this.unset("fur");
    } else {
      this.set("fur", Value.fromString(<string>value));
    }
  }

  get earring(): string | null {
    let value = this.get("earring");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set earring(value: string | null) {
    if (!value) {
      this.unset("earring");
    } else {
      this.set("earring", Value.fromString(<string>value));
    }
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get created(): Array<string> {
    let value = this.get("created");
    return value!.toStringArray();
  }

  set created(value: Array<string>) {
    this.set("created", Value.fromStringArray(value));
  }
}