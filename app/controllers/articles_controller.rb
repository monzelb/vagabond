class ArticlesController < ApplicationController

  def index
    @articles = Article.all
  end

  def show
    article_id = params[:id]
    @article = Article.find(article_id)
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.create(article_params)
    redirect_to @article
  end

  def article_params
    params.require(:article).permit(:location_id, :user_id, :title, :content)
  end
end
