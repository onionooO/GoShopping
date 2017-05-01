package com.gwy.daoImp;

import java.util.List;

import com.gwy.dao.CommodityDao;
import com.gwy.entity.Commodity;
import com.gwy.utils.DaoHandel;
import com.gwy.utils.Dictionary;
import com.gwy.utils.Singleton;

public class CommodityDaoImp implements CommodityDao {
	
	@Override
	public int insert(Commodity entity) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteById(Object id) {
		// TODO Auto-generated method stub
		return 0;
	}
	
	/**
	 * 根据商品的id，查询出商品的信息
	 */
	@Override
	public Commodity selectById(Object id) {
		String selectSql="select *from commodity where commodity_id=?";
		Object[] parameters=new Object[]{id};
		Commodity commodity=DaoHandel.executeQueryForSingle(selectSql, parameters,Commodity.class);
		return commodity;
	}

	/**
	 * 获取到所有的商品信息
	 */
	@Override
	public List<Commodity> selectAll() {
		String selectSql="select *from commodity";
		List<Commodity> list=DaoHandel.executeQueryForAll(selectSql,null,Commodity.class);
		return list;
	}
	/**
	 * 根据商品的id，修改商品的数量
	 */
	@Override
	public int updateCommodityById(int commodityId, int number) {
		String updateSql="update commodity set number=? where commodity_id=?";
		Object[] parameters=new Object[]{number,commodityId};
		int flag=DaoHandel.executeDML(updateSql, parameters);
		return flag;
	}
	
	/**
	 * 得到指定分类的商品的信息 
	 * 女装，男装，女鞋，男鞋，鲜花，零食
	 */
	@Override
	public List<Commodity> getAllCommodityByWord(String word) {
		String selectSql=Dictionary.matchBoth(word);
		if(selectSql==null){
			return null;
		}
		List<Commodity> list=DaoHandel.executeQueryForAll(selectSql,null,Commodity.class);
		//如果查询不到信息则采取另外一种策略
		if(list==null){
			selectSql=Dictionary.match(word);
		}
		list=DaoHandel.executeQueryForAll(selectSql,null,Commodity.class);
		return list;
	}

}
