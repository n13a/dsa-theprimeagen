import bfs from "@code/BTBFS";
import { tree } from "./tree";

test("bt bfs", function() {
    expect(bfs(tree, 20)).toEqual(true);
    expect(bfs(tree, 7)).toEqual(true);
    expect(bfs(tree, 69)).toEqual(false);
});




