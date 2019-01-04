# Tiny Merchent on Cloud (구름위의 소상인)

## Overall
* 구름위의 소상인은 스팀의 대상인 (Greate Merchent)를 온라인으로 구현 하는 프로젝트이다.

## 버전 1
### Usecase
* 사용자 별로 로그인이 가능 하다.
* 100일 동안 물품들의 시세는 새로운 게임을 시작 할 때 정해 진다.
* 이벤트 또한 게임을 시작 할 때 정해 진다.
* 구매 물품은 채소와 과일만 가능 하다.
* 매일(턴) 창고 임대비가 소지 금에서 차감 된다.
* 창고는 확장하거나 축소 할 수 있으며, 이 때의 비용은 정의한 대로 늘리거나 줄일 수 있으며, 이는 다른 표에 정의 한다.
* 창고 임대비는 크기에 따라 변경 되며 이는 다른 표에 정의 한다.
* 최대 100일(턴) 동안 물품을 사거나 팔 수 있으며, 100일 째 되는 날(턴)을 종료 하면, 결과 화면이 나온다.
* 결과 화면은 최종 소지 금액 및 시작 날짜, 및 종료 날짜, 거래 횟수 및 로그가 결과로 표현 된다. 이 기록은 개인 정보에 기록 되며, 추후 열람 가능 하지만, 버전 1에서 추후 열람 기능은 제공 하지 않는다.

### UI
* 로그인 화면 - Google or Facebook login을 지원 한다.
* 매뉴 화면 - 새 게임 시작 / 계속 하기  버튼이 있다. (진행 중인 게임이 있는 상황에서 새 게임을 시작 하면 모든 정보가 초기화 된다는 경고 팝업 출력 및 삭제 동의 여부를 묻고, 동의 하면 새로운 게임이 시작 된다.)
* 창고 화면 - 보유 물품 리스트가 나타난다. 창고를 확장 하거나 축소 할 수 있다. 창고 업그레이드 체계는 Greate Merchent와 동일 하다. 다음날(턴)로 넘길 수 있다.
* 물품 구매 화면 - 구매 가능 물품 리스트가 나타나고, 각 물품을 선택 하여 보유량 / 개당 평균 구매 금액 / 현재 가격 이 나타난다. 구매할 수 있으며, 창고 크기 보다 많은 양을 구매할 수 없다.
* 물품 판매 화면 - 보유 물품 리스트가 나타나고, 각 물품의 현재 가격이 표시 된다. 현재 가격 옆에는 해당 물품의 개당 평균 금액보다 현재 가격이 높으면 이익 표시, 반대면 손해 표시, 같다면 아무 표시도 하지 않는다. 해당 물품을 사용자가 지정한 갯수 만큼 판매가 가능 하다.
* 엔딩 화면 - 100일째 되는날 다음날(턴)로 넘길 경우 표현 되는 화면으로 Usecase에 정의된 내용이 표현 된다.

### Data 구조

#### Server
* 기본 가격 테이블
Finish_day:number // 게임 플레이 
```
inventory = {
  [level:number] : {
    size: number,
    upgrade_price: number,
    daily_price: number
  }...
}

products = {
  [code:number] : {
    label: string     // 제품 명
    kind: number      // 0 으로 고정
    min_price: number // 제품 최소 가격
    max_price: number // 제품 최대 가격
    max_quantity: number
    min_quantity: number
    use_inventory_slot: number  // 한개의 제품이 차지하는 인벤토리 크기 ==> 현재는 1로 고정 하자!!
    image_url: string           // 이미지 아이콘
  }...
}
```

* 개인 상태 정보
```
game_status = {
  day: number // 게임 진행 일자  -2: Not loading yet, -1 : No saved game, if day == finish day == finished
  inventory_level: number // 1 = 50, 2 = 100
  inventory: {
    [products_code]: {
      quantity: number
      avg_buying_price: number
    }...
  }
}
```

* 100일 동안의 물품 가격 리스트
```
product_price_table = [
  {
    [products_code]: {
      price: number
      qunatity: number
    }...
  }...  // - 0번 인덱스가 시작이고 1, 2, 3 이렇게 진행 됨 
]
```

* 거래 기록 
```
trade_history = [
  {
    type: number,         // 0 : buy, 1: sell, 2: inventory fee, 3: inventory upgrade
    day: number,
    product_code: number,
    quantity: number,     // 수량
    price: number,        // 총액 
  }...
]
```

#### Client ( Redux 구조 )
* 개인 상태 정보
```
inventory = {
  -- same as server
} // 초기에 로딩하고, 계속 참조해서 사용 한다.

products = {
  -- same as server
} // 초기에 로딩하고, 계속 참조해서 사용 한다.

game_status = {
  -- same as server
}

product_price_table = {
  [products_code]: {
    --- same as server 
  }
}
```

### API 정의

* GET   /api/load_default_settings : 서버에 셋팅된 products 들을 가져온다.
```
{
  "finish_day": number,
  "products": { -- same as server },
  "inventory": { -- same as server },
  "game_status": {
    --- same as server
  }
}

```
* GET /api/game_status    : 현재의 게임 상황을 가져온다.
* GET /api/product_prices : 현재의 상품 정볼르 가져온다.

* GET   /api/loadgame : 저장된 게임을 불러 온다.
```
{
-- API Result Message 형식을 따름
}
```

* POST  /api/newgame : 새로운 게임을 시작 한다. 기존의 정보는 모두 초기화 되고, 새로 product_price 테이블을 생성한 뒤 보내 준다.
```
{
  -- API Result Message 형식을 따름
}
```
* PUT   /api/sleeping : 다음날로 진행 한다.
```
{
  -- API Result Message 형식을 따름
}
```
* PUT   /api/buy/:product_code/:quantity : 물건을 구매 한다.
```
{
  -- API Result Message 형식을 따름
}
```
* PUT   /api/sell/:product_code/:quantity : 물건을 판매 한다.
```
{
  -- API Result Message 형식을 따름
}
```
* PUT   /api/inventory/upgrade            : 인벤토리를 업그레이드 한다.
```
{
    -- API Result Message 형식을 따름
}
```
* PUT   /api/inventory/downgrade            : 인벤토리를 다운그레이드 한다.
```
{
    -- API Result Message 형식을 따름
}
```
* GET   /api/result   : 게임 결과를 리턴 한다.
```
{
  -- API Result Message 형식을 따름
}
```

#### API Result Message 정의
```
{
  "result": boolean // true : 성공, false: 실패
  "message": string // 실패 사유 -> 창고 임대료 부족
}
```
* 0x00xx : 성공 코드
* 0x0000 : 그냥 성공
* 0x0001 : 게임 종료

* 0x01xx : 실패
* 0x0100 : 알수 없는 이유로 실패
* 0x0101 : 금액 부족 ( 자세한 내용은 message에 기록 됨)
* 0x0102 : 물품 부족 ( 자세한 내용은 message에 기록 됨)
* 0x0103 : Inventory full
* 0x0104 : Inventory Maximum level
* 0x0105 : Inventory is not empty ( 마지막 날 sleeping 시 )
* 0x0106 : 저장된 게임이 없습니다.

!!! 위의 API에서는 모든 post, put 요청에 성공 실패가 없음, 그래서 성공 실패에 대한 내용을 넣고, 아래의 API를 통해 상태를 불러 오도록 하는건 어떨까?

### Todo List
[V] UI Html 작성
[V] 프로젝트 구성 (React.js + Redux + Axio + Node.js + Express)
[V] 데이터 구조 정의
[V] Restfull api 정의 (기능 기준)
[] 메뉴 화면 구현
[] 창고 화면 구현
[] 물품 구매 화면 구현
[] 물품 판매 화면 구현
[] 엔딩 화면 구현
[] 로그인 로직 구현
