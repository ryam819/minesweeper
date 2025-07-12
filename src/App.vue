<template>
  <h2>MineSweeper</h2>
  行数: <input type="number" id="rows" v-model.number="numRows" min="1" max="100"><br>
  列数: <input type="number" id="cols" v-model.number="numCols" min="1" max="100"><br>
  地雷数: <input type="number" id="mines" v-model.number="numMines" min="1" max="100"><br>
  <button id="show-matrix" @click="showMatrix = true">地雷作成</button>
  <div>
    <table id="buttonTable">
      <tbody>
        <tr v-for="row in rows" :key="row">
          <td v-for="col in cols" :key="col">
            <input type="button" v-model="matrix[row-1][col-1]" class="cellButton">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      numRows: 1,
      numCols: 1,
      numMines: 1,
      matrix: [],
      selectedItem: null,
    };
  },
  computed: {
    rows() {
      return Array.from({ length: this.numRows }, (_, i) => i + 1);
    },
    cols() {
      return Array.from({ length: this.numCols }, (_, i) => i + 1);
    }
  },
  watch: {
    numRows: {
      handler() {
        this.updateMatrix();
      },
      immediate: true
    },
    numCols: {
      handler() {
        this.updateMatrix();
      },
      immediate: true
    }
  },
  methods: {
    updateMatrix() {
      const newMatrix = [];
      for (let i = 0; i < this.numRows; i++) {
        newMatrix[i] = [];
        for (let j = 0; j < this.numCols; j++) {
          // 行列の初期化
          if (this.matrix[i] && this.matrix[i][j] !== undefined) {
            newMatrix[i][j] = this.matrix[i][j];
          } else {
            newMatrix[i][j] = '';
          }
        }
      }
      this.matrix = newMatrix;
    },
    showItem(rowIndex, colIndex) {
      this.selectedItem = this.matrix[rowIndex][colIndex];
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cellButton {
  background-color: white;
  color: white;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
}
table {
  border-collapse: collapse;
}
</style>
